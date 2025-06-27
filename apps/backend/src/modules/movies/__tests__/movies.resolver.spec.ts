import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { MoviesResolver } from '../movies.resolver';
import { MoviesService } from '../movies.service';
import { MovieSearchResult, Movie } from '../entities/movie.entity';
import { SearchMoviesInput } from '../dto/search-movies.input';

const mockMovie: Movie = {
  id: 'uuid-123',
  tmdbId: 550,
  title: 'Fight Club',
  overview: 'A ticking-time-bomb insomniac and a slippery soap salesman...',
  releaseDate: new Date('1999-10-15'),
  runtime: 139,
  posterPath: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
  backdropPath: '/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg',
  voteAverage: 8.4,
  genres: ['Drama', 'Thriller'],
  createdAt: new Date('2023-01-01'),
  updatedAt: new Date('2023-01-01'),
  posterUrl: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
  backdropUrl:
    'https://image.tmdb.org/t/p/w1280/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg',
};

const mockMovieSearchResult: MovieSearchResult = {
  movies: [mockMovie],
  page: 1,
  totalPages: 100,
  totalResults: 2000,
};

const mockMoviesService = {
  searchMovies: jest.fn(),
  getPopularMovies: jest.fn(),
  getNowPlayingMovies: jest.fn(),
  getTopRatedMovies: jest.fn(),
  getMovieById: jest.fn(),
  getMovieByTmdbId: jest.fn(),
};

describe('MoviesResolver', () => {
  let resolver: MoviesResolver;
  let moviesService: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MoviesResolver,
        {
          provide: MoviesService,
          useValue: mockMoviesService,
        },
      ],
    }).compile();

    resolver = module.get<MoviesResolver>(MoviesResolver);
    moviesService = module.get<MoviesService>(MoviesService);

    jest.clearAllMocks();
  });

  describe('searchMovies', () => {
    it('should return search results successfully', async () => {
      // Arrange
      const searchInput: SearchMoviesInput = { query: 'fight club', page: 1 };
      mockMoviesService.searchMovies.mockResolvedValue(mockMovieSearchResult);

      // Act
      const result = await resolver.searchMovies(searchInput);

      // Assert
      expect(result).toEqual(mockMovieSearchResult);
      expect(moviesService.searchMovies).toHaveBeenCalledWith(searchInput);
    });

    it('should handle search with query only (default page)', async () => {
      // Arrange
      const searchInput: SearchMoviesInput = { query: 'test' };
      mockMoviesService.searchMovies.mockResolvedValue(mockMovieSearchResult);

      // Act
      const result = await resolver.searchMovies(searchInput);

      // Assert
      expect(result).toEqual(mockMovieSearchResult);
      expect(moviesService.searchMovies).toHaveBeenCalledWith(searchInput);
    });

    it('should propagate service errors', async () => {
      // Arrange
      const searchInput: SearchMoviesInput = { query: 'test' };
      const serviceError = new Error('Service error');
      mockMoviesService.searchMovies.mockRejectedValue(serviceError);

      // Act & Assert
      await expect(resolver.searchMovies(searchInput)).rejects.toThrow(
        serviceError
      );
    });
  });

  describe('getPopularMovies', () => {
    it('should return popular movies with specified page', async () => {
      // Arrange
      mockMoviesService.getPopularMovies.mockResolvedValue(
        mockMovieSearchResult
      );

      // Act
      const result = await resolver.getPopularMovies(2);

      // Assert
      expect(result).toEqual(mockMovieSearchResult);
      expect(moviesService.getPopularMovies).toHaveBeenCalledWith(2);
    });

    it('should use default page 1 when page is not provided', async () => {
      // Arrange
      mockMoviesService.getPopularMovies.mockResolvedValue(
        mockMovieSearchResult
      );

      // Act
      const result = await resolver.getPopularMovies(1); // GraphQL default value

      // Assert
      expect(result).toEqual(mockMovieSearchResult);
      expect(moviesService.getPopularMovies).toHaveBeenCalledWith(1);
    });

    it('should propagate service errors', async () => {
      // Arrange
      const serviceError = new Error('Service error');
      mockMoviesService.getPopularMovies.mockRejectedValue(serviceError);

      // Act & Assert
      await expect(resolver.getPopularMovies(1)).rejects.toThrow(serviceError);
    });
  });

  describe('getNowPlayingMovies', () => {
    it('should return now playing movies successfully', async () => {
      // Arrange
      mockMoviesService.getNowPlayingMovies.mockResolvedValue(
        mockMovieSearchResult
      );

      // Act
      const result = await resolver.getNowPlayingMovies(3);

      // Assert
      expect(result).toEqual(mockMovieSearchResult);
      expect(moviesService.getNowPlayingMovies).toHaveBeenCalledWith(3);
    });

    it('should use default page 1', async () => {
      // Arrange
      mockMoviesService.getNowPlayingMovies.mockResolvedValue(
        mockMovieSearchResult
      );

      // Act
      const result = await resolver.getNowPlayingMovies(1);

      // Assert
      expect(result).toEqual(mockMovieSearchResult);
      expect(moviesService.getNowPlayingMovies).toHaveBeenCalledWith(1);
    });
  });

  describe('getTopRatedMovies', () => {
    it('should return top rated movies successfully', async () => {
      // Arrange
      mockMoviesService.getTopRatedMovies.mockResolvedValue(
        mockMovieSearchResult
      );

      // Act
      const result = await resolver.getTopRatedMovies(5);

      // Assert
      expect(result).toEqual(mockMovieSearchResult);
      expect(moviesService.getTopRatedMovies).toHaveBeenCalledWith(5);
    });

    it('should use default page 1', async () => {
      // Arrange
      mockMoviesService.getTopRatedMovies.mockResolvedValue(
        mockMovieSearchResult
      );

      // Act
      const result = await resolver.getTopRatedMovies(1);

      // Assert
      expect(result).toEqual(mockMovieSearchResult);
      expect(moviesService.getTopRatedMovies).toHaveBeenCalledWith(1);
    });
  });

  describe('getMovieById', () => {
    it('should return movie by ID successfully', async () => {
      // Arrange
      mockMoviesService.getMovieById.mockResolvedValue(mockMovie);

      // Act
      const result = await resolver.getMovieById('uuid-123');

      // Assert
      expect(result).toEqual(mockMovie);
      expect(moviesService.getMovieById).toHaveBeenCalledWith('uuid-123');
    });

    it('should propagate NotFoundException from service', async () => {
      // Arrange
      const notFoundError = new NotFoundException('Movie not found');
      mockMoviesService.getMovieById.mockRejectedValue(notFoundError);

      // Act & Assert
      await expect(resolver.getMovieById('non-existent')).rejects.toThrow(
        notFoundError
      );
      expect(moviesService.getMovieById).toHaveBeenCalledWith('non-existent');
    });

    it('should propagate other service errors', async () => {
      // Arrange
      const serviceError = new Error('Database error');
      mockMoviesService.getMovieById.mockRejectedValue(serviceError);

      // Act & Assert
      await expect(resolver.getMovieById('uuid-123')).rejects.toThrow(
        serviceError
      );
    });
  });

  describe('getMovieByTmdbId', () => {
    it('should return movie by TMDb ID successfully', async () => {
      // Arrange
      mockMoviesService.getMovieByTmdbId.mockResolvedValue(mockMovie);

      // Act
      const result = await resolver.getMovieByTmdbId(550);

      // Assert
      expect(result).toEqual(mockMovie);
      expect(moviesService.getMovieByTmdbId).toHaveBeenCalledWith(550);
    });

    it('should handle non-existent TMDb ID', async () => {
      // Arrange
      const serviceError = new Error('Failed to get movie');
      mockMoviesService.getMovieByTmdbId.mockRejectedValue(serviceError);

      // Act & Assert
      await expect(resolver.getMovieByTmdbId(99999)).rejects.toThrow(
        serviceError
      );
      expect(moviesService.getMovieByTmdbId).toHaveBeenCalledWith(99999);
    });

    it('should handle TMDb API errors', async () => {
      // Arrange
      const tmdbError = new Error('TMDb API unavailable');
      mockMoviesService.getMovieByTmdbId.mockRejectedValue(tmdbError);

      // Act & Assert
      await expect(resolver.getMovieByTmdbId(550)).rejects.toThrow(tmdbError);
    });
  });

  describe('integration scenarios', () => {
    it('should handle multiple concurrent requests', async () => {
      // Arrange
      mockMoviesService.searchMovies.mockResolvedValue(mockMovieSearchResult);
      mockMoviesService.getPopularMovies.mockResolvedValue(
        mockMovieSearchResult
      );
      mockMoviesService.getMovieById.mockResolvedValue(mockMovie);

      // Act
      const [searchResult, popularResult, movieResult] = await Promise.all([
        resolver.searchMovies({ query: 'test' }),
        resolver.getPopularMovies(1),
        resolver.getMovieById('uuid-123'),
      ]);

      // Assert
      expect(searchResult).toEqual(mockMovieSearchResult);
      expect(popularResult).toEqual(mockMovieSearchResult);
      expect(movieResult).toEqual(mockMovie);
      expect(moviesService.searchMovies).toHaveBeenCalledWith({
        query: 'test',
      });
      expect(moviesService.getPopularMovies).toHaveBeenCalledWith(1);
      expect(moviesService.getMovieById).toHaveBeenCalledWith('uuid-123');
    });
  });
});
