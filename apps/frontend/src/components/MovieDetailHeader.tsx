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

  const getRatingClasses = (rating?: number) => {
    if (!rating) return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    if (rating >= 8)
      return 'bg-green-500/20 text-green-400 border-green-500/30';
    if (rating >= 7) return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    if (rating >= 6)
      return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    return 'bg-red-500/20 text-red-400 border-red-500/30';
  };

  return (
    <div className="relative min-h-screen bg-gradient-primary overflow-hidden">
      {movie.backdropUrl && (
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${movie.backdropUrl})` }}
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            {movie.posterUrl ? (
              <img
                src={movie.posterUrl}
                alt={`${movie.title} poster`}
                className="w-64 h-96 lg:w-80 lg:h-[30rem] object-cover rounded-xl shadow-2xl border border-white/20"
                loading="eager"
              />
            ) : (
              <div className="w-64 h-96 lg:w-80 lg:h-[30rem] bg-white/10 rounded-xl border border-white/20 flex items-center justify-center backdrop-blur-md">
                <span className="text-6xl opacity-50">🎬</span>
              </div>
            )}
          </div>

          <div className="flex-1 lg:max-w-3xl">
            <div className="mb-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {movie.title}
              </h1>
              {movie.originalTitle && movie.originalTitle !== movie.title && (
                <p className="text-lg text-white/80 mb-2">
                  Original: {movie.originalTitle}
                </p>
              )}
              {movie.tagline && (
                <p className="text-xl lg:text-2xl text-accent-400 italic font-light mb-4">
                  "{movie.tagline}"
                </p>
              )}
            </div>

            <div className="mb-6">
              <div className="flex flex-wrap gap-4 lg:gap-6 mb-4">
                {releaseYear && (
                  <span className="flex items-center gap-2 text-white/90 bg-white/10 px-3 py-2 rounded-lg backdrop-blur-md border border-white/10">
                    <span>📅</span>
                    <span className="font-medium">{releaseYear}</span>
                  </span>
                )}

                {movie.runtime && (
                  <span className="flex items-center gap-2 text-white/90 bg-white/10 px-3 py-2 rounded-lg backdrop-blur-md border border-white/10">
                    <span>⏱️</span>
                    <span className="font-medium">
                      {formatRuntime(movie.runtime)}
                    </span>
                  </span>
                )}

                {movie.voteAverage && (
                  <span
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-md border font-medium ${getRatingClasses(movie.voteAverage)}`}
                  >
                    <span>⭐</span>
                    <span>{(movie.voteAverage / 2).toFixed(1)}/5</span>
                    {movie.voteCount && (
                      <span className="text-sm opacity-80">
                        ({movie.voteCount.toLocaleString()} votes)
                      </span>
                    )}
                  </span>
                )}
              </div>

              {movie.genres.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map(genre => (
                    <span
                      key={genre}
                      className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium border border-primary-500/30"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {movie.overview && (
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Overview
                </h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  {movie.overview}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {movie.status && (
                <div className="bg-white/5 rounded-lg p-4 backdrop-blur-md border border-white/10">
                  <span className="block text-sm text-white/60 mb-1">
                    Status
                  </span>
                  <span className="text-white font-medium">{movie.status}</span>
                </div>
              )}

              {movie.originalLanguage && (
                <div className="bg-white/5 rounded-lg p-4 backdrop-blur-md border border-white/10">
                  <span className="block text-sm text-white/60 mb-1">
                    Language
                  </span>
                  <span className="text-white font-medium">
                    {movie.originalLanguage.toUpperCase()}
                  </span>
                </div>
              )}

              {movie.budget && (
                <div className="bg-white/5 rounded-lg p-4 backdrop-blur-md border border-white/10">
                  <span className="block text-sm text-white/60 mb-1">
                    Budget
                  </span>
                  <span className="text-white font-medium">
                    {formatMoney(movie.budget)}
                  </span>
                </div>
              )}

              {movie.revenue && (
                <div className="bg-white/5 rounded-lg p-4 backdrop-blur-md border border-white/10">
                  <span className="block text-sm text-white/60 mb-1">
                    Revenue
                  </span>
                  <span className="text-white font-medium">
                    {formatMoney(movie.revenue)}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-4">
              {movie.homepage && (
                <a
                  href={movie.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <span>🌐</span>
                  Official Website
                </a>
              )}

              {movie.imdbId && (
                <a
                  href={`https://www.imdb.com/title/${movie.imdbId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent-400 hover:bg-yellow-500 text-gray-900 font-medium rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <span>🎭</span>
                  View on IMDb
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailHeader;
