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
    if (!rating) return 'bg-gray-500/90 text-white';
    const normalized = rating / 2; // Convert to 5-point scale
    if (normalized >= 4) return 'bg-green-500/90 text-white';
    if (normalized >= 3) return 'bg-blue-500/90 text-white';
    if (normalized >= 2) return 'bg-amber-500/90 text-white';
    return 'bg-red-500/90 text-white';
  };

  const hasPoster = movie.posterUrl && !imageError;
  const isClickable = !!onClick;

  return (
    <div
      className={`bg-white/10 rounded-xl overflow-hidden transition-all duration-300 backdrop-blur-md border border-white/10 ${
        isClickable
          ? 'cursor-pointer hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20'
          : ''
      } ${className}`}
      onClick={isClickable ? handleClick : undefined}
      onKeyDown={isClickable ? handleKeyDown : undefined}
      tabIndex={isClickable ? 0 : undefined}
      role={isClickable ? 'button' : undefined}
      aria-label={isClickable ? `View details for ${movie.title}` : undefined}
    >
      <div className="relative aspect-poster overflow-hidden">
        {hasPoster ? (
          <>
            <img
              src={movie.posterUrl}
              alt={`${movie.title} poster`}
              className={`w-full h-full object-cover transition-all duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading={priority ? 'eager' : 'lazy'}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 bg-white/5 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-white/5 text-white/60">
            <div className="text-4xl mb-2">🎬</div>
            <span className="text-sm">No Image</span>
          </div>
        )}

        {showDetails && movie.voteAverage && (
          <div
            className={`absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-2xl text-sm font-semibold backdrop-blur-md ${getRatingColor(movie.voteAverage)}`}
          >
            <span>⭐</span>
            <span>{formatRating(movie.voteAverage)}</span>
          </div>
        )}

        {isClickable && (
          <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 hover:opacity-100">
            <div className="text-2xl mb-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="font-medium text-white">View Details</span>
          </div>
        )}
      </div>

      {showDetails && (
        <div className="p-4">
          <h3
            className="text-lg font-semibold mb-2 leading-tight line-clamp-2"
            title={movie.title}
          >
            {movie.title}
          </h3>

          <div className="flex items-center gap-2 mb-2 text-sm opacity-80">
            <span>{formatReleaseYear(movie.releaseDate)}</span>
            {movie.runtime && (
              <>
                <span className="opacity-50">•</span>
                <span>{movie.runtime}m</span>
              </>
            )}
          </div>

          {movie.genres && movie.genres.length > 0 && (
            <div className="mb-3 text-xs opacity-70">
              {movie.genres.slice(0, 3).map((genre, index) => (
                <span key={genre} className="text-accent-400">
                  {genre}
                  {index < Math.min(movie.genres.length, 3) - 1 && ', '}
                </span>
              ))}
              {movie.genres.length > 3 && (
                <span className="text-gray-400">
                  +{movie.genres.length - 3}
                </span>
              )}
            </div>
          )}

          {movie.overview && (
            <p
              className="text-sm leading-relaxed opacity-80 line-clamp-3"
              title={movie.overview}
            >
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
