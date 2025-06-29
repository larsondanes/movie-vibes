import React, { useState, useCallback, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { SEARCH_MOVIES_QUERY } from '../graphql/movies';
import { MovieSearchResult, Movie } from '../types/movie';
import MovieGrid from './MovieGrid';
import SearchBar from './SearchBar';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import Pagination from './Pagination';

interface MovieSearchProps {
  className?: string;
}

const MovieSearch: React.FC<MovieSearchProps> = ({ className = '' }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState<MovieSearchResult | null>(
    null
  );
  const [hasSearched, setHasSearched] = useState(false);

  const [searchMovies, { loading, error, data }] = useLazyQuery(
    SEARCH_MOVIES_QUERY,
    {
      variables: {
        searchInput: {
          query: searchQuery,
          page: currentPage,
        },
      },
      errorPolicy: 'all',
      onCompleted: data => {
        if (data?.searchMovies) {
          setSearchResults(data.searchMovies);
        }
      },
    }
  );

  const handleSearch = useCallback(
    (query: string) => {
      if (query.trim().length < 2) {
        setSearchResults(null);
        setHasSearched(false);
        return;
      }

      setSearchQuery(query);
      setCurrentPage(1);
      setHasSearched(true);

      searchMovies({
        variables: {
          searchInput: {
            query: query.trim(),
            page: 1,
          },
        },
      });
    },
    [searchMovies]
  );

  const handlePageChange = useCallback(
    (page: number) => {
      if (!searchQuery || page === currentPage) return;

      setCurrentPage(page);

      searchMovies({
        variables: {
          searchInput: {
            query: searchQuery,
            page,
          },
        },
      });

      // Scroll to top when changing pages
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [searchMovies, searchQuery, currentPage]
  );

  const handleClearSearch = useCallback(() => {
    setSearchQuery('');
    setSearchResults(null);
    setHasSearched(false);
    setCurrentPage(1);
  }, []);

  // Update search results when data changes
  useEffect(() => {
    if (data?.searchMovies) {
      setSearchResults(data.searchMovies);
    }
  }, [data]);

  const isEmpty =
    hasSearched && searchResults && searchResults.movies.length === 0;

  const handleMovieClick = (movie: Movie) => {
    navigate(`/movies/${movie.tmdbId}`);
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Search Header */}
      <div className="space-y-6">
        <SearchBar
          value={searchQuery}
          onSearch={handleSearch}
          onClear={handleClearSearch}
          placeholder="Search for movies..."
          className=""
        />

        {hasSearched && searchResults && !loading && (
          <div className="bg-white/5 rounded-xl p-4 backdrop-blur-md border border-white/10">
            <p className="text-white font-medium text-center">
              Found{' '}
              <span className="text-accent-400 font-bold">
                {searchResults.totalResults.toLocaleString()}
              </span>{' '}
              movies
              {searchQuery && (
                <>
                  {' '}
                  for{' '}
                  <span className="text-primary-400 font-semibold">
                    "{searchQuery}"
                  </span>
                </>
              )}
            </p>
          </div>
        )}
      </div>

      {/* Search Content */}
      <div className="space-y-8">
        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center gap-6 py-16">
            <LoadingSpinner size="large" />
            <p className="text-white/80 text-lg font-medium">
              {currentPage === 1
                ? 'Searching movies...'
                : 'Loading more results...'}
            </p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="max-w-md mx-auto">
            <ErrorMessage
              title="Search Failed"
              message="Unable to search movies. Please try again."
              onRetry={() => handleSearch(searchQuery)}
              className=""
            />
          </div>
        )}

        {/* Empty Results */}
        {isEmpty && (
          <div className="bg-white/5 rounded-xl p-12 backdrop-blur-md border border-white/10 text-center max-w-2xl mx-auto">
            <div className="text-8xl mb-6 opacity-60">🎬</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              No movies found
            </h3>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              We couldn't find any movies matching{' '}
              <span className="text-primary-400 font-semibold">
                "{searchQuery}"
              </span>
              .
              <br />
              Try adjusting your search terms or check for typos.
            </p>
            <button
              onClick={handleClearSearch}
              className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Search Results */}
        {searchResults && searchResults.movies.length > 0 && !loading && (
          <div className="space-y-8">
            <MovieGrid
              movies={searchResults.movies}
              onMovieClick={handleMovieClick}
              className=""
            />

            {searchResults.totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={searchResults.totalPages}
                totalResults={searchResults.totalResults}
                onPageChange={handlePageChange}
                className=""
              />
            )}
          </div>
        )}

        {/* Search Placeholder (Initial State) */}
        {!hasSearched && (
          <div className="bg-white/5 rounded-xl p-12 backdrop-blur-md border border-white/10 text-center max-w-2xl mx-auto">
            <div className="text-8xl mb-6 opacity-60">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Discover Amazing Movies
            </h3>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Search through thousands of movies to find your next favorite.
              <br />
              Enter a movie title, actor, or keyword to get started.
            </p>
            <div className="space-y-4">
              <p className="text-white/60 font-medium">Try searching for:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Marvel', 'Inception', 'Studio Ghibli', 'Comedy 2023'].map(
                  suggestion => (
                    <button
                      key={suggestion}
                      onClick={() => handleSearch(suggestion)}
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg border border-white/20"
                    >
                      {suggestion}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieSearch;
