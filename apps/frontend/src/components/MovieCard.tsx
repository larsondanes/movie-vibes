import React, { useState } from 'react';
import { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
  onClick?: (_movie: Movie) => void;
  className?: string;
  showDetails?: boolean;
  priority?: boolean; // For image loading priority
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  onClick,
  className = '',
  showDetails = true,
  priority = false,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick(movie);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  const formatReleaseYear = (dateString?: string) => {
    if (!dateString) return 'Unknown';
    return new Date(dateString).getFullYear().toString();
  };

  const formatRating = (rating?: number) => {
    if (!rating) return null;
    return (rating / 2).toFixed(1); // Convert from 10-point to 5-point scale
  };

  const getRatingColor = (rating?: number) => {
    if (!rating) return 'rating-unknown';
    const normalized = rating / 2; // Convert to 5-point scale
    if (normalized >= 4) return 'rating-excellent';
    if (normalized >= 3) return 'rating-good';
    if (normalized >= 2) return 'rating-fair';
    return 'rating-poor';
  };

  const hasPoster = movie.posterUrl && !imageError;
  const isClickable = !!onClick;

  return (
    <div
      className={`movie-card ${className} ${isClickable ? 'clickable' : ''} ${
        imageLoaded ? 'loaded' : ''
      }`}
      onClick={isClickable ? handleClick : undefined}
      onKeyDown={isClickable ? handleKeyDown : undefined}
      tabIndex={isClickable ? 0 : undefined}
      role={isClickable ? 'button' : undefined}
      aria-label={isClickable ? `View details for ${movie.title}` : undefined}
    >
      <div className="movie-poster-container">
        {hasPoster ? (
          <>
            <img
              src={movie.posterUrl}
              alt={`${movie.title} poster`}
              className={`movie-poster ${imageLoaded ? 'loaded' : ''}`}
              loading={priority ? 'eager' : 'lazy'}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
            {!imageLoaded && (
              <div className="poster-skeleton">
                <div className="skeleton-shimmer" />
              </div>
            )}
          </>
        ) : (
          <div className="poster-placeholder">
            <div className="placeholder-icon">🎬</div>
            <span className="placeholder-text">No Image</span>
          </div>
        )}

        {showDetails && movie.voteAverage && (
          <div className={`rating-badge ${getRatingColor(movie.voteAverage)}`}>
            <span className="rating-stars">⭐</span>
            <span className="rating-value">
              {formatRating(movie.voteAverage)}
            </span>
          </div>
        )}

        {isClickable && (
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
        )}
      </div>

      {showDetails && (
        <div className="movie-info">
          <h3 className="movie-title" title={movie.title}>
            {movie.title}
          </h3>

          <div className="movie-meta">
            <span className="release-year">
              {formatReleaseYear(movie.releaseDate)}
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
                  {index < Math.min(movie.genres.length, 3) - 1 && ', '}
                </span>
              ))}
              {movie.genres.length > 3 && (
                <span className="genre-more">+{movie.genres.length - 3}</span>
              )}
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
      )}
    </div>
  );
};

export default MovieCard;
