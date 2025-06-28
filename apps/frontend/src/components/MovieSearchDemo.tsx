import React, { useState } from 'react';
import { Movie } from '../types/movie';

// Mock data for demo purposes
const mockMovies: Movie[] = [
  {
    id: '1',
    tmdbId: 550,
    title: 'Fight Club',
    overview:
      'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy.',
    releaseDate: '1999-10-15',
    runtime: 139,
    posterPath: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    backdropPath: '/52AfXWuXCHn3UjD17rBruA9f5qb.jpg',
    voteAverage: 8.433,
    genres: ['Drama'],
    posterUrl:
      'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    backdropUrl:
      'https://image.tmdb.org/t/p/w1280/52AfXWuXCHn3UjD17rBruA9f5qb.jpg',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    tmdbId: 13,
    title: 'Forrest Gump',
    overview:
      'A man with a low IQ has accomplished great things in his life and been present during significant historic events.',
    releaseDate: '1994-07-06',
    runtime: 142,
    posterPath: '/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
    backdropPath: '/7c6HeDDDml3p8vCDDB32YXNMVva.jpg',
    voteAverage: 8.471,
    genres: ['Comedy', 'Drama', 'Romance'],
    posterUrl:
      'https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
    backdropUrl:
      'https://image.tmdb.org/t/p/w1280/7c6HeDDDml3p8vCDDB32YXNMVva.jpg',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '3',
    tmdbId: 238,
    title: 'The Godfather',
    overview:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    releaseDate: '1972-03-14',
    runtime: 175,
    posterPath: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    backdropPath: '/iVZ9iTcFSduYELlF5ueZEJHuVGt.jpg',
    voteAverage: 8.69,
    genres: ['Crime', 'Drama'],
    posterUrl:
      'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    backdropUrl:
      'https://image.tmdb.org/t/p/w1280/iVZ9iTcFSduYELlF5ueZEJHuVGt.jpg',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '4',
    tmdbId: 424,
    title: "Schindler's List",
    overview:
      'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
    releaseDate: '1993-11-30',
    runtime: 195,
    posterPath: '/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg',
    backdropPath: '/loRmRzQXZeqG78TqZuyvSlEQfZb.jpg',
    voteAverage: 8.565,
    genres: ['Drama', 'History', 'War'],
    posterUrl:
      'https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg',
    backdropUrl:
      'https://image.tmdb.org/t/p/w1280/loRmRzQXZeqG78TqZuyvSlEQfZb.jpg',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
];

const MovieSearchDemo: React.FC = () => {
  const [activeView, setActiveView] = useState<'search' | 'browse'>('browse');

  const handleMovieClick = (movie: Movie) => {
    alert(`You clicked on: ${movie.title}`);
  };

  return (
    <div className="movies-page">
      <div className="page-header">
        <div className="header-content">
          <h1 className="page-title">Movies (Demo)</h1>
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
          <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎬</div>
            <h3>Search Demo</h3>
            <p>
              The search functionality will be connected to the backend GraphQL
              API.
            </p>
            <p>For now, enjoy browsing the movie cards below!</p>
          </div>
        ) : (
          <div className="movies-browser">
            <div className="browser-header">
              <h2 className="browser-title">Demo Movies</h2>
              <p className="browser-subtitle">
                Here's a preview of our amazing movie cards!
              </p>
            </div>

            <div className="movie-grid">
              {mockMovies.map(movie => (
                <div
                  key={movie.id}
                  className="movie-card clickable"
                  onClick={() => handleMovieClick(movie)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleMovieClick(movie);
                    }
                  }}
                >
                  <div className="movie-poster-container">
                    <img
                      src={movie.posterUrl}
                      alt={`${movie.title} poster`}
                      className="movie-poster loaded"
                      loading="lazy"
                    />

                    <div
                      className={`rating-badge ${
                        movie.voteAverage && movie.voteAverage >= 8
                          ? 'rating-excellent'
                          : movie.voteAverage && movie.voteAverage >= 7
                            ? 'rating-good'
                            : movie.voteAverage && movie.voteAverage >= 6
                              ? 'rating-fair'
                              : 'rating-poor'
                      }`}
                    >
                      <span className="rating-stars">⭐</span>
                      <span className="rating-value">
                        {movie.voteAverage
                          ? (movie.voteAverage / 2).toFixed(1)
                          : 'N/A'}
                      </span>
                    </div>

                    <div className="hover-overlay">
                      <div className="play-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <span className="view-details">View Details</span>
                    </div>
                  </div>

                  <div className="movie-info">
                    <h3 className="movie-title" title={movie.title}>
                      {movie.title}
                    </h3>

                    <div className="movie-meta">
                      <span className="release-year">
                        {movie.releaseDate
                          ? new Date(movie.releaseDate).getFullYear()
                          : 'Unknown'}
                      </span>
                      {movie.runtime && (
                        <>
                          <span className="meta-separator">•</span>
                          <span className="runtime">{movie.runtime}m</span>
                        </>
                      )}
                    </div>

                    {movie.genres && movie.genres.length > 0 && (
                      <div className="movie-genres">
                        {movie.genres.slice(0, 3).map((genre, index) => (
                          <span key={genre} className="genre-tag">
                            {genre}
                            {index < Math.min(movie.genres.length, 3) - 1 &&
                              ', '}
                          </span>
                        ))}
                      </div>
                    )}

                    {movie.overview && (
                      <p className="movie-overview" title={movie.overview}>
                        {movie.overview.length > 120
                          ? `${movie.overview.substring(0, 120)}...`
                          : movie.overview}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
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

export default MovieSearchDemo;
