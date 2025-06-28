import React from 'react';
import { MovieDetails } from '../types/movie';

interface MovieDetailHeaderProps {
  movie: MovieDetails;
}

const MovieDetailHeader: React.FC<MovieDetailHeaderProps> = ({ movie }) => {
  const releaseYear = movie.releaseDate
    ? new Date(movie.releaseDate).getFullYear()
    : null;

  const formatRuntime = (minutes?: number) => {
    if (!minutes) return null;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const formatMoney = (amount?: number) => {
    if (!amount) return null;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getRatingColor = (rating?: number) => {
    if (!rating) return 'rating-unknown';
    if (rating >= 8) return 'rating-excellent';
    if (rating >= 7) return 'rating-good';
    if (rating >= 6) return 'rating-fair';
    return 'rating-poor';
  };

  return (
    <div className="movie-detail-header">
      {movie.backdropUrl && (
        <div
          className="backdrop-image"
          style={{ backgroundImage: `url(${movie.backdropUrl})` }}
        >
          <div className="backdrop-overlay" />
        </div>
      )}

      <div className="header-content">
        <div className="movie-poster-section">
          {movie.posterUrl ? (
            <img
              src={movie.posterUrl}
              alt={`${movie.title} poster`}
              className="movie-poster-large"
              loading="eager"
            />
          ) : (
            <div className="movie-poster-placeholder">
              <span className="poster-icon">🎬</span>
            </div>
          )}
        </div>

        <div className="movie-info-section">
          <div className="title-group">
            <h1 className="movie-title">{movie.title}</h1>
            {movie.originalTitle && movie.originalTitle !== movie.title && (
              <p className="original-title">Original: {movie.originalTitle}</p>
            )}
            {movie.tagline && (
              <p className="movie-tagline">"{movie.tagline}"</p>
            )}
          </div>

          <div className="movie-meta">
            <div className="meta-row">
              {releaseYear && (
                <span className="meta-item">
                  <span className="meta-icon">📅</span>
                  {releaseYear}
                </span>
              )}

              {movie.runtime && (
                <span className="meta-item">
                  <span className="meta-icon">⏱️</span>
                  {formatRuntime(movie.runtime)}
                </span>
              )}

              {movie.voteAverage && (
                <span
                  className={`meta-item rating ${getRatingColor(movie.voteAverage)}`}
                >
                  <span className="meta-icon">⭐</span>
                  {(movie.voteAverage / 2).toFixed(1)}/5
                  {movie.voteCount && (
                    <span className="vote-count">
                      ({movie.voteCount.toLocaleString()} votes)
                    </span>
                  )}
                </span>
              )}
            </div>

            {movie.genres.length > 0 && (
              <div className="genres">
                {movie.genres.map((genre, index) => (
                  <span key={genre} className="genre-tag">
                    {genre}
                    {index < movie.genres.length - 1 && ', '}
                  </span>
                ))}
              </div>
            )}
          </div>

          {movie.overview && (
            <div className="movie-overview">
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
          )}

          <div className="movie-details-grid">
            {movie.status && (
              <div className="detail-item">
                <span className="detail-label">Status:</span>
                <span className="detail-value">{movie.status}</span>
              </div>
            )}

            {movie.originalLanguage && (
              <div className="detail-item">
                <span className="detail-label">Language:</span>
                <span className="detail-value">
                  {movie.originalLanguage.toUpperCase()}
                </span>
              </div>
            )}

            {movie.budget && (
              <div className="detail-item">
                <span className="detail-label">Budget:</span>
                <span className="detail-value">
                  {formatMoney(movie.budget)}
                </span>
              </div>
            )}

            {movie.revenue && (
              <div className="detail-item">
                <span className="detail-label">Revenue:</span>
                <span className="detail-value">
                  {formatMoney(movie.revenue)}
                </span>
              </div>
            )}
          </div>

          <div className="action-buttons">
            {movie.homepage && (
              <a
                href={movie.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn homepage-btn"
              >
                <span className="btn-icon">🌐</span>
                Official Website
              </a>
            )}

            {movie.imdbId && (
              <a
                href={`https://www.imdb.com/title/${movie.imdbId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn imdb-btn"
              >
                <span className="btn-icon">🎭</span>
                View on IMDb
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailHeader;
