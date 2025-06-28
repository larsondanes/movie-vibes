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
      <div className="movie-detail-loading">
        <LoadingSpinner size="large" />
        <p className="loading-text">Loading movie details...</p>
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
    <div className="movie-detail-page">
      <MovieDetailHeader movie={movie} />

      <div className="movie-detail-content">
        <div className="main-content">
          <MovieDetailInfo movie={movie} />

          {credits && (
            <MovieCastCrew credits={credits} loading={creditsLoading} />
          )}

          {videos && videos.results.length > 0 && (
            <MovieVideosSection videos={videos} loading={videosLoading} />
          )}
        </div>

        <aside className="sidebar-content">
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
  );
};

export default MovieDetailPage;
