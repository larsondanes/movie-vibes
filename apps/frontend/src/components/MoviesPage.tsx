import React, { useState } from 'react';
import MovieSearch from './MovieSearch';
import MovieBrowser from './MovieBrowser';

const MoviesPage: React.FC = () => {
  const [activeView, setActiveView] = useState<'search' | 'browse'>('browse');

  return (
    <div className="movies-page">
      <div className="page-header">
        <div className="header-content">
          <h1 className="page-title">Movies</h1>
          <p className="page-description">
            Discover, search, and explore thousands of movies from around the
            world
          </p>
        </div>

        <div className="view-selector">
          <button
            onClick={() => setActiveView('browse')}
            className={`view-btn ${activeView === 'browse' ? 'active' : ''}`}
            aria-pressed={activeView === 'browse'}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            Browse
          </button>

          <button
            onClick={() => setActiveView('search')}
            className={`view-btn ${activeView === 'search' ? 'active' : ''}`}
            aria-pressed={activeView === 'search'}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            Search
          </button>
        </div>
      </div>

      <div className="page-content">
        {activeView === 'search' ? (
          <MovieSearch className="movies-search-view" />
        ) : (
          <MovieBrowser className="movies-browse-view" />
        )}
      </div>

      <div className="page-footer">
        <div className="footer-stats">
          <div className="stat-item">
            <span className="stat-icon">🎬</span>
            <div className="stat-content">
              <span className="stat-number">500K+</span>
              <span className="stat-label">Movies</span>
            </div>
          </div>

          <div className="stat-item">
            <span className="stat-icon">🌟</span>
            <div className="stat-content">
              <span className="stat-number">Daily</span>
              <span className="stat-label">Updates</span>
            </div>
          </div>

          <div className="stat-item">
            <span className="stat-icon">🎭</span>
            <div className="stat-content">
              <span className="stat-number">All Genres</span>
              <span className="stat-label">Covered</span>
            </div>
          </div>
        </div>

        <div className="powered-by">
          <span>Powered by</span>
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="tmdb-link"
          >
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="The Movie Database"
              width="80"
              height="auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
