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
      <section className={`recommendations-section ${className}`}>
        <h2>{title}</h2>
        <div className="loading-container">
          <LoadingSpinner size="medium" />
          <p>Loading recommendations...</p>
        </div>
      </section>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <section className={`recommendations-section ${className}`}>
        <h2>{title}</h2>
        <div className="no-recommendations">
          <p>No recommendations available at this time.</p>
        </div>
      </section>
    );
  }

  const handleMovieClick = (movie: Movie) => {
    navigate(`/movies/${movie.tmdbId}`);
  };

  const getRatingColor = (rating?: number) => {
    if (!rating) return 'rating-unknown';
    if (rating >= 8) return 'rating-excellent';
    if (rating >= 7) return 'rating-good';
    if (rating >= 6) return 'rating-fair';
    return 'rating-poor';
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Unknown';
    return new Date(dateString).getFullYear();
  };

  return (
    <section className={`recommendations-section ${className}`}>
      <div className="section-header">
        <h2>{title}</h2>
        <span className="movie-count">{movies.length} movies</span>
      </div>

      <div className="recommendations-grid">
        {movies.map(movie => (
          <div
            key={movie.id}
            className="recommendation-card"
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
            <div className="recommendation-poster">
              {movie.posterUrl ? (
                <img
                  src={movie.posterUrl}
                  alt={`${movie.title} poster`}
                  className="poster-image"
                  loading="lazy"
                />
              ) : (
                <div className="poster-placeholder">
                  <span className="poster-icon">🎬</span>
                </div>
              )}

              {movie.voteAverage && (
                <div
                  className={`rating-badge ${getRatingColor(movie.voteAverage)}`}
                >
                  <span className="rating-stars">⭐</span>
                  <span className="rating-value">
                    {(movie.voteAverage / 2).toFixed(1)}
                  </span>
                </div>
              )}

              <div className="hover-overlay">
                <div className="overlay-content">
                  <span className="view-details">View Details</span>
                  <div className="play-icon">
                    <span>▶️</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="recommendation-info">
              <h3 className="movie-title" title={movie.title}>
                {movie.title}
              </h3>

              <div className="movie-meta">
                <span className="release-year">
                  {formatDate(movie.releaseDate)}
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
                  {movie.genres.slice(0, 2).map((genre, index) => (
                    <span key={genre} className="genre-tag">
                      {genre}
                      {index < Math.min(movie.genres.length, 2) - 1 && ', '}
                    </span>
                  ))}
                  {movie.genres.length > 2 && (
                    <span className="more-genres">
                      +{movie.genres.length - 2}
                    </span>
                  )}
                </div>
              )}

              {movie.overview && (
                <p className="movie-overview" title={movie.overview}>
                  {movie.overview.length > 80
                    ? `${movie.overview.substring(0, 80)}...`
                    : movie.overview}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="view-more-container">
        <button className="view-more-btn">View More {title}</button>
      </div>
    </section>
  );
};

export default MovieRecommendations;
