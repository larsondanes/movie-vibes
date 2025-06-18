// Shared constants

export const API_ENDPOINTS = {
  AUTH: '/auth',
  USERS: '/users',
  MOVIES: '/movies',
  LISTS: '/lists',
  REVIEWS: '/reviews',
} as const;

export const MOVIE_GENRES = [
  'Action',
  'Adventure',
  'Animation',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
  'History',
  'Horror',
  'Music',
  'Mystery',
  'Romance',
  'Science Fiction',
  'TV Movie',
  'Thriller',
  'War',
  'Western',
] as const;

export const LIST_TYPES = ['watched', 'watchlist', 'custom'] as const;
export const PRIVACY_LEVELS = ['public', 'friends', 'private'] as const;