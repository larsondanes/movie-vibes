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
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 my-8 ${className}`}
      >
        {Array.from({ length: 20 }, (_, index) => (
          <div
            key={index}
            className="bg-white/10 rounded-xl overflow-hidden animate-pulse"
          >
            <div className="aspect-poster bg-white/10" />
            <div className="p-4">
              <div className="h-5 bg-white/10 rounded mb-2" />
              <div className="h-4 bg-white/5 rounded mb-2 w-3/5" />
              <div className="h-3 bg-white/5 rounded w-4/5" />
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
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 my-8 ${className}`}
    >
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
      ))}
    </div>
  );
};

export default MovieGrid;
