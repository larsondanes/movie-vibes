import React, { useState, useCallback, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { SEARCH_MOVIES_QUERY } from '../graphql/movies';
import { MovieSearchResult } from '../types/movie';
import MovieGrid from './MovieGrid';
import SearchBar from './SearchBar';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import Pagination from './Pagination';

interface MovieSearchProps {
  className?: string;
}

const MovieSearch: React.FC<MovieSearchProps> = ({ className = '' }) => {
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

  return (
    <div className={`movie-search ${className}`}>
      <div className="search-header">
        <SearchBar
          value={searchQuery}
          onSearch={handleSearch}
          onClear={handleClearSearch}
          placeholder="Search for movies..."
          className="search-bar"
        />

        {hasSearched && searchResults && !loading && (
          <div className="search-info">
            <p className="results-count">
              Found {searchResults.totalResults.toLocaleString()} movies
              {searchQuery && (
                <span className="search-term"> for "{searchQuery}"</span>
              )}
            </p>
          </div>
        )}
      </div>

      <div className="search-content">
        {loading && (
          <div className="loading-container">
            <LoadingSpinner size="large" />
            <p className="loading-text">
              {currentPage === 1
                ? 'Searching movies...'
                : 'Loading more results...'}
            </p>
          </div>
        )}

        {error && (
          <ErrorMessage
            title="Search Failed"
            message="Unable to search movies. Please try again."
            onRetry={() => handleSearch(searchQuery)}
            className="search-error"
          />
        )}

        {isEmpty && (
          <div className="empty-results">
            <div className="empty-icon">🎬</div>
            <h3>No movies found</h3>
            <p>
              We couldn't find any movies matching "{searchQuery}".
              <br />
              Try adjusting your search terms or check for typos.
            </p>
            <button onClick={handleClearSearch} className="clear-search-btn">
              Clear Search
            </button>
          </div>
        )}

        {searchResults && searchResults.movies.length > 0 && !loading && (
          <>
            <MovieGrid
              movies={searchResults.movies}
              className="search-results-grid"
            />

            {searchResults.totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={searchResults.totalPages}
                totalResults={searchResults.totalResults}
                onPageChange={handlePageChange}
                className="search-pagination"
              />
            )}
          </>
        )}

        {!hasSearched && (
          <div className="search-placeholder">
            <div className="placeholder-icon">🔍</div>
            <h3>Discover Amazing Movies</h3>
            <p>
              Search through thousands of movies to find your next favorite.
              <br />
              Enter a movie title, actor, or keyword to get started.
            </p>
            <div className="search-suggestions">
              <p className="suggestions-label">Try searching for:</p>
              <div className="suggestion-buttons">
                {['Marvel', 'Inception', 'Studio Ghibli', 'Comedy 2023'].map(
                  suggestion => (
                    <button
                      key={suggestion}
                      onClick={() => handleSearch(suggestion)}
                      className="suggestion-btn"
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
