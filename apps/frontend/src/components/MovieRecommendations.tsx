import React from 'react';
import { Movie } from '../types/movie';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

interface MovieRecommendationsProps {
  movies: Movie[];
  title?: string;
  loading?: boolean;
  className?: string;
}

const MovieRecommendations: React.FC<MovieRecommendationsProps> = ({
  movies,
  title = 'Recommended Movies',
  loading,
  className = '',
}) => {
  const navigate = useNavigate();

  if (loading) {
    return (
      <section
        className={`bg-white/5 rounded-xl p-6 backdrop-blur-md border border-white/10 my-8 ${className}`}
      >
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span>🎬</span>
          {title}
        </h2>
        <div className="flex flex-col items-center gap-4 py-12">
          <LoadingSpinner size="medium" />
          <p className="text-white/80">Loading recommendations...</p>
        </div>
      </section>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <section
        className={`bg-white/5 rounded-xl p-6 backdrop-blur-md border border-white/10 my-8 ${className}`}
      >
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span>🎬</span>
          {title}
        </h2>
        <div className="text-center py-12">
          <p className="text-white/70 text-lg">
            No recommendations available at this time.
          </p>
        </div>
      </section>
    );
  }

  const handleMovieClick = (movie: Movie) => {
    navigate(`/movies/${movie.tmdbId}`);
  };

  const getRatingColor = (rating?: number) => {
    if (!rating) return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    if (rating >= 8)
      return 'bg-green-500/20 text-green-400 border-green-500/30';
    if (rating >= 7) return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    if (rating >= 6)
      return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    return 'bg-red-500/20 text-red-400 border-red-500/30';
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Unknown';
    return new Date(dateString).getFullYear();
  };

  return (
    <section
      className={`bg-white/5 rounded-xl p-6 backdrop-blur-md border border-white/10 my-8 ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span>🎬</span>
          {title}
        </h2>
        <span className="text-sm font-medium text-white/70 bg-white/10 px-3 py-1 rounded-full">
          {movies.length} movies
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
        {movies.map(movie => (
          <div
            key={movie.id}
            className="bg-white/5 rounded-lg border border-white/10 overflow-hidden cursor-pointer transition-all duration-300 hover:bg-white/10 hover:transform hover:-translate-y-2 hover:shadow-2xl group"
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
            <div className="relative aspect-poster">
              {movie.posterUrl ? (
                <img
                  src={movie.posterUrl}
                  alt={`${movie.title} poster`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-white/10 flex items-center justify-center">
                  <span className="text-6xl opacity-60">🎬</span>
                </div>
              )}

              {movie.voteAverage && (
                <div
                  className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${getRatingColor(movie.voteAverage)}`}
                >
                  <span>⭐</span>
                  <span>{(movie.voteAverage / 2).toFixed(1)}</span>
                </div>
              )}

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="mb-2">
                    <span className="text-sm font-medium">View Details</span>
                  </div>
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xl ml-1">▶</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3">
              <h3
                className="font-semibold text-white text-sm mb-2 line-clamp-2 leading-tight"
                title={movie.title}
              >
                {movie.title}
              </h3>

              <div className="flex items-center gap-2 text-xs text-white/60 mb-2">
                <span>{formatDate(movie.releaseDate)}</span>
                {movie.runtime && (
                  <>
                    <span>•</span>
                    <span>{movie.runtime}m</span>
                  </>
                )}
              </div>

              {movie.genres && movie.genres.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {movie.genres.slice(0, 2).map((genre, _index) => (
                    <span
                      key={genre}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium"
                    >
                      {genre}
                    </span>
                  ))}
                  {movie.genres.length > 2 && (
                    <span className="px-2 py-1 bg-white/10 text-white/60 rounded-full text-xs">
                      +{movie.genres.length - 2}
                    </span>
                  )}
                </div>
              )}

              {movie.overview && (
                <p
                  className="text-white/70 text-xs leading-relaxed line-clamp-3"
                  title={movie.overview}
                >
                  {movie.overview.length > 80
                    ? `${movie.overview.substring(0, 80)}...`
                    : movie.overview}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button className="flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
          View More {title}
        </button>
      </div>
    </section>
  );
};

export default MovieRecommendations;
