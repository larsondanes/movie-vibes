// Shared TypeScript types

export interface User {
  id: string;
  email: string;
  username: string;
  displayName?: string;
  avatar?: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Movie {
  id: string;
  tmdbId: number;
  title: string;
  overview?: string;
  releaseDate?: Date;
  runtime?: number;
  posterPath?: string;
  backdropPath?: string;
  genres: string[];
  voteAverage?: number;
}

export interface MovieList {
  id: string;
  name: string;
  description?: string;
  type: 'watched' | 'watchlist' | 'custom';
  privacy: 'public' | 'friends' | 'private';
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Review {
  id: string;
  content: string;
  rating: number;
  movieId: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}