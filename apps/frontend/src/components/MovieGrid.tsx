import React from 'react';
import { Movie } from '../types/movie';
import MovieCard from './MovieCard';

interface MovieGridProps {
  movies: Movie[];
  className?: string;
  loading?: boolean;
  onMovieClick?: (_movie: Movie) => void;
}

const MovieGrid: React.FC<MovieGridProps> = ({
  movies,
  className = '',
  loading = false,
  onMovieClick,
}) => {
  if (loading) {
    return (
      <div className={`movie-grid loading ${className}`}>
        {Array.from({ length: 20 }, (_, index) => (
          <div key={index} className="movie-card-skeleton">
            <div className="skeleton-poster" />
            <div className="skeleton-content">
              <div className="skeleton-title" />
              <div className="skeleton-subtitle" />
              <div className="skeleton-text" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <div className={`movie-grid ${className}`}>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={onMovieClick}
          className="grid-item"
        />
      ))}
    </div>
  );
};

export default MovieGrid;
