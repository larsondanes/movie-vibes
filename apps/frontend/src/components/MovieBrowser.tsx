import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import {
  POPULAR_MOVIES_QUERY,
  NOW_PLAYING_MOVIES_QUERY,
  TOP_RATED_MOVIES_QUERY,
} from '../graphql/movies';
import { MovieSearchResult, Movie } from '../types/movie';
import MovieGrid from './MovieGrid';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import Pagination from './Pagination';

type BrowseCategory = 'popular' | 'now_playing' | 'top_rated';

interface MovieBrowserProps {
  className?: string;
  defaultCategory?: BrowseCategory;
}

const MovieBrowser: React.FC<MovieBrowserProps> = ({
  className = '',
  defaultCategory = 'popular',
}) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] =
    useState<BrowseCategory>(defaultCategory);
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    {
      id: 'popular' as const,
      label: 'Popular',
      description: 'Most popular movies right now',
      icon: '🔥',
      query: POPULAR_MOVIES_QUERY,
    },
    {
      id: 'now_playing' as const,
      label: 'Now Playing',
      description: 'Currently in theaters',
      icon: '🎬',
      query: NOW_PLAYING_MOVIES_QUERY,
    },
    {
      id: 'top_rated' as const,
      label: 'Top Rated',
      description: 'Highest rated movies of all time',
      icon: '⭐',
      query: TOP_RATED_MOVIES_QUERY,
    },
  ];

  const activeConfig = categories.find(cat => cat.id === activeCategory)!;

  const { loading, error, data, refetch } = useQuery(activeConfig.query, {
    variables: { page: currentPage },
    errorPolicy: 'all',
    notifyOnNetworkStatusChange: true,
  });

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const handleCategoryChange = (category: BrowseCategory) => {
    if (category !== activeCategory) {
      setActiveCategory(category);
      setCurrentPage(1);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetry = () => {
    refetch({ page: currentPage });
  };

  const getMovieData = (): MovieSearchResult | null => {
    if (!data) return null;

    switch (activeCategory) {
      case 'popular':
        return data.popularMovies;
      case 'now_playing':
        return data.nowPlayingMovies;
      case 'top_rated':
        return data.topRatedMovies;
      default:
        return null;
    }
  };

  const movieData = getMovieData();

  const handleMovieClick = (movie: Movie) => {
    navigate(`/movies/${movie.tmdbId}`);
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Discover Movies
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Explore the latest and greatest films from around the world
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center gap-4 flex-wrap">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`flex items-center gap-3 px-6 py-4 rounded-xl border backdrop-blur-lg transition-all duration-300 hover:transform hover:-translate-y-0.5 shadow-lg ${
              activeCategory === category.id
                ? 'bg-white/95 text-primary-600 border-white/40 shadow-xl shadow-black/20 backdrop-blur-xl'
                : 'bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30 shadow-md shadow-black/10 hover:shadow-lg hover:shadow-black/15'
            }`}
            aria-pressed={activeCategory === category.id}
          >
            <span className="text-2xl">{category.icon}</span>
            <div className="text-left">
              <span className="block font-semibold text-base">
                {category.label}
              </span>
              <span className="block text-sm opacity-70">
                {category.description}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="space-y-6">
        {loading && (
          <div className="flex flex-col items-center justify-center py-16 space-y-4">
            <LoadingSpinner size="large" />
            <p className="text-xl text-white/80 font-medium">
              Loading {activeConfig.label.toLowerCase()} movies...
            </p>
          </div>
        )}

        {error && (
          <ErrorMessage
            title="Failed to Load Movies"
            message={`Unable to load ${activeConfig.label.toLowerCase()} movies. Please try again.`}
            onRetry={handleRetry}
            className="max-w-lg mx-auto"
          />
        )}

        {movieData && !loading && (
          <>
            {/* Results Header */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {activeConfig.icon} {activeConfig.label}
              </h3>
              <p className="text-white/80 text-lg">
                {movieData.totalResults.toLocaleString()} movies available
              </p>
            </div>

            {/* Movie Grid */}
            <MovieGrid
              movies={movieData.movies}
              onMovieClick={handleMovieClick}
              className=""
            />

            {/* Pagination */}
            {movieData.totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={movieData.totalPages}
                totalResults={movieData.totalResults}
                onPageChange={handlePageChange}
                className=""
              />
            )}
          </>
        )}

        {!loading && !error && !movieData && (
          <div className="flex flex-col items-center justify-center py-16 space-y-6 text-center">
            <div className="text-6xl opacity-50">🎭</div>
            <h3 className="text-2xl font-bold text-white">No Movies Found</h3>
            <p className="text-white/70 max-w-md">
              We couldn't find any movies in this category.
            </p>
            <button
              onClick={handleRetry}
              className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-all duration-200 hover:transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieBrowser;
