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
    <div className={`movie-browser ${className}`}>
      <div className="browser-header">
        <h2 className="browser-title">Discover Movies</h2>
        <p className="browser-subtitle">
          Explore the latest and greatest films from around the world
        </p>
      </div>

      <div className="category-tabs">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`category-tab ${
              activeCategory === category.id ? 'active' : ''
            }`}
            aria-pressed={activeCategory === category.id}
          >
            <span className="tab-icon">{category.icon}</span>
            <div className="tab-content">
              <span className="tab-label">{category.label}</span>
              <span className="tab-description">{category.description}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="browser-content">
        {loading && (
          <div className="loading-container">
            <LoadingSpinner size="large" />
            <p className="loading-text">
              Loading {activeConfig.label.toLowerCase()} movies...
            </p>
          </div>
        )}

        {error && (
          <ErrorMessage
            title="Failed to Load Movies"
            message={`Unable to load ${activeConfig.label.toLowerCase()} movies. Please try again.`}
            onRetry={handleRetry}
            className="browser-error"
          />
        )}

        {movieData && !loading && (
          <>
            <div className="results-header">
              <h3 className="results-title">
                {activeConfig.icon} {activeConfig.label}
              </h3>
              <p className="results-count">
                {movieData.totalResults.toLocaleString()} movies available
              </p>
            </div>

            <MovieGrid
              movies={movieData.movies}
              onMovieClick={handleMovieClick}
              className="browser-grid"
            />

            {movieData.totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={movieData.totalPages}
                totalResults={movieData.totalResults}
                onPageChange={handlePageChange}
                className="browser-pagination"
              />
            )}
          </>
        )}

        {!loading && !error && !movieData && (
          <div className="no-data">
            <div className="no-data-icon">🎭</div>
            <h3>No Movies Found</h3>
            <p>We couldn't find any movies in this category.</p>
            <button onClick={handleRetry} className="retry-btn">
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieBrowser;
