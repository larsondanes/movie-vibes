import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {
  MOVIE_DETAILS_QUERY,
  MOVIE_CREDITS_QUERY,
  MOVIE_VIDEOS_QUERY,
  SIMILAR_MOVIES_QUERY,
} from '../graphql/movies';
import {
  MovieDetails,
  MovieCredits,
  MovieVideos,
  MovieSearchResult,
} from '../types/movie';
import MovieDetailHeader from './MovieDetailHeader';
import MovieDetailInfo from './MovieDetailInfo';
import MovieCastCrew from './MovieCastCrew';
import MovieVideosSection from './MovieVideosSection';
import MovieRecommendations from './MovieRecommendations';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <ErrorMessage
        title="Movie Not Found"
        message="No movie ID provided in the URL."
      />
    );
  }

  const tmdbId = parseInt(id, 10);

  if (isNaN(tmdbId)) {
    return (
      <ErrorMessage
        title="Invalid Movie ID"
        message="The movie ID must be a valid number."
      />
    );
  }

  const {
    data: detailsData,
    loading: detailsLoading,
    error: detailsError,
  } = useQuery(MOVIE_DETAILS_QUERY, {
    variables: { tmdbId },
    errorPolicy: 'all',
  });

  const { data: creditsData, loading: creditsLoading } = useQuery(
    MOVIE_CREDITS_QUERY,
    {
      variables: { tmdbId },
      errorPolicy: 'all',
    }
  );

  const { data: videosData, loading: videosLoading } = useQuery(
    MOVIE_VIDEOS_QUERY,
    {
      variables: { tmdbId },
      errorPolicy: 'all',
    }
  );

  const { data: similarData, loading: similarLoading } = useQuery(
    SIMILAR_MOVIES_QUERY,
    {
      variables: { tmdbId, page: 1 },
      errorPolicy: 'all',
    }
  );

  if (detailsLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col items-center justify-center px-4">
        <LoadingSpinner size="large" />
        <p className="mt-6 text-xl text-white/80 font-medium">
          Loading movie details...
        </p>
      </div>
    );
  }

  if (detailsError || !detailsData?.movieDetails) {
    return (
      <ErrorMessage
        title="Failed to Load Movie"
        message="Unable to load movie details. Please try again or check if the movie exists."
        onRetry={() => window.location.reload()}
      />
    );
  }

  const movie: MovieDetails = detailsData.movieDetails;
  const credits: MovieCredits | undefined = creditsData?.movieCredits;
  const videos: MovieVideos | undefined = videosData?.movieVideos;
  const similarMovies: MovieSearchResult | undefined =
    similarData?.similarMovies;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <MovieDetailHeader movie={movie} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2 space-y-8">
            <MovieDetailInfo movie={movie} />

            {credits && (
              <MovieCastCrew credits={credits} loading={creditsLoading} />
            )}

            {videos && videos.results.length > 0 && (
              <MovieVideosSection videos={videos} loading={videosLoading} />
            )}
          </div>

          <aside className="xl:col-span-1">
            {similarMovies && similarMovies.movies.length > 0 && (
              <MovieRecommendations
                movies={similarMovies.movies}
                title="Similar Movies"
                loading={similarLoading}
              />
            )}
          </aside>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
