import { Test, TestingModule } from '@nestjs/testing';
import { Logger, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@movie-vibes/database';
import { MoviesService } from '../movies.service';
import {
  TMDbService,
  TMDbMovie,
  TMDbMovieDetails,
  TMDbSearchResponse,
} from '../../tmdb/tmdb.service';

const mockTMDbMovie: TMDbMovie = {
  id: 550,
  title: 'Fight Club',
  overview: 'A ticking-time-bomb insomniac and a slippery soap salesman...',
  poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
  backdrop_path: '/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg',
  release_date: '1999-10-15',
  vote_average: 8.4,
  vote_count: 26280,
  genre_ids: [18, 53],
  original_language: 'en',
  original_title: 'Fight Club',
  popularity: 61.416,
  adult: false,
  video: false,
};

const mockTMDbSearchResponse: TMDbSearchResponse = {
  page: 1,
  total_pages: 100,
  total_results: 2000,
  results: [mockTMDbMovie],
};

const mockTMDbMovieDetails: TMDbMovieDetails = {
  ...mockTMDbMovie,
  belongs_to_collection: null,
  budget: 63000000,
  genres: [
    { id: 18, name: 'Drama' },
    { id: 53, name: 'Thriller' },
  ],
  homepage: 'http://www.foxmovies.com/movies/fight-club',
  imdb_id: 'tt0137523',
  production_companies: [],
  production_countries: [],
  revenue: 100853753,
  runtime: 139,
  spoken_languages: [],
  status: 'Released',
  tagline: 'Mischief. Mayhem. Soap.',
};

const mockPrismaMovie = {
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
};

const mockPrismaClient = {
  movie: {
    findUnique: jest.fn(),
    create: jest.fn(),
  },
};

const mockTMDbService = {
  searchMovies: jest.fn(),
  getPopularMovies: jest.fn(),
  getNowPlayingMovies: jest.fn(),
  getTopRatedMovies: jest.fn(),
  getMovieDetails: jest.fn(),
  getImageUrl: jest.fn(),
};

describe('MoviesService', () => {
  let service: MoviesService;
  let prismaClient: PrismaClient;
  let tmdbService: TMDbService;
  let loggerSpy: jest.SpyInstance;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MoviesService,
        {
          provide: PrismaClient,
          useValue: mockPrismaClient,
        },
        {
          provide: TMDbService,
          useValue: mockTMDbService,
        },
      ],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
    prismaClient = module.get<PrismaClient>(PrismaClient);
    tmdbService = module.get<TMDbService>(TMDbService);

    // Mock Logger methods
    loggerSpy = jest
      .spyOn(Logger.prototype, 'error')
      .mockImplementation(() => {});

    // Setup default mock implementations
    mockTMDbService.getImageUrl.mockImplementation(
      (path: string | null, size?: string) => {
        if (!path) return null;
        return `https://image.tmdb.org/t/p/${size || 'w500'}${path}`;
      }
    );

    jest.clearAllMocks();
  });

  afterEach(() => {
    loggerSpy.mockRestore();
  });

  describe('searchMovies', () => {
    it('should return search results with temporary movie objects when not in database', async () => {
      // Arrange
      mockTMDbService.searchMovies.mockResolvedValue(mockTMDbSearchResponse);
      mockPrismaClient.movie.findUnique.mockResolvedValue(null);

      // Act
      const result = await service.searchMovies({
        query: 'fight club',
        page: 1,
      });

      // Assert
      expect(result).toEqual({
        movies: [
          {
            id: 'tmdb-550',
            tmdbId: 550,
            title: 'Fight Club',
            overview:
              'A ticking-time-bomb insomniac and a slippery soap salesman...',
            releaseDate: new Date('1999-10-15'),
            runtime: null,
            posterPath: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
            backdropPath: '/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg',
            voteAverage: 8.4,
            genres: [],
            createdAt: expect.any(Date),
            updatedAt: expect.any(Date),
            posterUrl:
              'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
            backdropUrl:
              'https://image.tmdb.org/t/p/w1280/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg',
          },
        ],
        page: 1,
        totalPages: 100,
        totalResults: 2000,
      });
      expect(tmdbService.searchMovies).toHaveBeenCalledWith('fight club', 1);
      expect(prismaClient.movie.findUnique).toHaveBeenCalledWith({
        where: { tmdbId: 550 },
      });
    });

    it('should return database movie when found in database', async () => {
      // Arrange
      mockTMDbService.searchMovies.mockResolvedValue(mockTMDbSearchResponse);
      mockPrismaClient.movie.findUnique.mockResolvedValue(mockPrismaMovie);

      // Act
      const result = await service.searchMovies({ query: 'fight club' });

      // Assert
      expect(result.movies[0]).toEqual({
        id: 'uuid-123',
        tmdbId: 550,
        title: 'Fight Club',
        overview:
          'A ticking-time-bomb insomniac and a slippery soap salesman...',
        releaseDate: new Date('1999-10-15'),
        runtime: 139,
        posterPath: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
        backdropPath: '/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg',
        voteAverage: 8.4,
        genres: ['Drama', 'Thriller'],
        createdAt: new Date('2023-01-01'),
        updatedAt: new Date('2023-01-01'),
        posterUrl:
          'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
        backdropUrl:
          'https://image.tmdb.org/t/p/w1280/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg',
      });
    });

    it('should use default page 1 when page is not provided', async () => {
      // Arrange
      mockTMDbService.searchMovies.mockResolvedValue(mockTMDbSearchResponse);
      mockPrismaClient.movie.findUnique.mockResolvedValue(null);

      // Act
      await service.searchMovies({ query: 'test' });

      // Assert
      expect(tmdbService.searchMovies).toHaveBeenCalledWith('test', 1);
    });

    it('should handle TMDb service errors', async () => {
      // Arrange
      const tmdbError = new Error('TMDb API error');
      mockTMDbService.searchMovies.mockRejectedValue(tmdbError);

      // Act & Assert
      await expect(service.searchMovies({ query: 'test' })).rejects.toThrow(
        'Failed to search movies'
      );
      expect(loggerSpy).toHaveBeenCalledWith(
        'Failed to search movies: TMDb API error',
        expect.any(String)
      );
    });
  });

  describe('getPopularMovies', () => {
    it('should return popular movies successfully', async () => {
      // Arrange
      mockTMDbService.getPopularMovies.mockResolvedValue(
        mockTMDbSearchResponse
      );
      mockPrismaClient.movie.findUnique.mockResolvedValue(null);

      // Act
      const result = await service.getPopularMovies(2);

      // Assert
      expect(result.page).toBe(1);
      expect(result.movies).toHaveLength(1);
      expect(tmdbService.getPopularMovies).toHaveBeenCalledWith(2);
    });

    it('should handle errors', async () => {
      // Arrange
      mockTMDbService.getPopularMovies.mockRejectedValue(
        new Error('API error')
      );

      // Act & Assert
      await expect(service.getPopularMovies()).rejects.toThrow(
        'Failed to get popular movies'
      );
    });
  });

  describe('getNowPlayingMovies', () => {
    it('should return now playing movies successfully', async () => {
      // Arrange
      mockTMDbService.getNowPlayingMovies.mockResolvedValue(
        mockTMDbSearchResponse
      );
      mockPrismaClient.movie.findUnique.mockResolvedValue(null);

      // Act
      const result = await service.getNowPlayingMovies();

      // Assert
      expect(result.page).toBe(1);
      expect(result.movies).toHaveLength(1);
      expect(tmdbService.getNowPlayingMovies).toHaveBeenCalledWith(1);
    });
  });

  describe('getTopRatedMovies', () => {
    it('should return top rated movies successfully', async () => {
      // Arrange
      mockTMDbService.getTopRatedMovies.mockResolvedValue(
        mockTMDbSearchResponse
      );
      mockPrismaClient.movie.findUnique.mockResolvedValue(null);

      // Act
      const result = await service.getTopRatedMovies(3);

      // Assert
      expect(result.page).toBe(1);
      expect(result.movies).toHaveLength(1);
      expect(tmdbService.getTopRatedMovies).toHaveBeenCalledWith(3);
    });
  });

  describe('getMovieById', () => {
    it('should return movie when found in database', async () => {
      // Arrange
      mockPrismaClient.movie.findUnique.mockResolvedValue(mockPrismaMovie);

      // Act
      const result = await service.getMovieById('uuid-123');

      // Assert
      expect(result.id).toBe('uuid-123');
      expect(result.title).toBe('Fight Club');
      expect(prismaClient.movie.findUnique).toHaveBeenCalledWith({
        where: { id: 'uuid-123' },
      });
    });

    it('should throw NotFoundException when movie not found', async () => {
      // Arrange
      mockPrismaClient.movie.findUnique.mockResolvedValue(null);

      // Act & Assert
      await expect(service.getMovieById('non-existent')).rejects.toThrow(
        NotFoundException
      );
    });

    it('should handle database errors', async () => {
      // Arrange
      mockPrismaClient.movie.findUnique.mockRejectedValue(
        new Error('DB error')
      );

      // Act & Assert
      await expect(service.getMovieById('uuid-123')).rejects.toThrow(
        'Failed to get movie'
      );
    });
  });

  describe('getMovieByTmdbId', () => {
    it('should return movie from database when found', async () => {
      // Arrange
      mockPrismaClient.movie.findUnique.mockResolvedValue(mockPrismaMovie);

      // Act
      const result = await service.getMovieByTmdbId(550);

      // Assert
      expect(result.tmdbId).toBe(550);
      expect(prismaClient.movie.findUnique).toHaveBeenCalledWith({
        where: { tmdbId: 550 },
      });
    });

    it('should fetch from TMDb and save when not in database', async () => {
      // Arrange
      mockPrismaClient.movie.findUnique.mockResolvedValue(null);
      mockTMDbService.getMovieDetails.mockResolvedValue(mockTMDbMovieDetails);
      mockPrismaClient.movie.create.mockResolvedValue(mockPrismaMovie);

      // Act
      const result = await service.getMovieByTmdbId(550);

      // Assert
      expect(tmdbService.getMovieDetails).toHaveBeenCalledWith(550);
      expect(prismaClient.movie.create).toHaveBeenCalledWith({
        data: {
          tmdbId: 550,
          title: 'Fight Club',
          overview:
            'A ticking-time-bomb insomniac and a slippery soap salesman...',
          releaseDate: new Date('1999-10-15'),
          runtime: 139,
          posterPath: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
          backdropPath: '/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg',
          voteAverage: 8.4,
          genres: ['Drama', 'Thriller'],
        },
      });
      expect(result.tmdbId).toBe(550);
    });

    it('should handle TMDb API errors', async () => {
      // Arrange
      mockPrismaClient.movie.findUnique.mockResolvedValue(null);
      mockTMDbService.getMovieDetails.mockRejectedValue(
        new Error('TMDb error')
      );

      // Act & Assert
      await expect(service.getMovieByTmdbId(550)).rejects.toThrow(
        'Failed to get movie'
      );
    });
  });

  describe('convertTMDbToMovie', () => {
    it('should handle movies with null release date', async () => {
      // Arrange
      const movieWithoutDate = { ...mockTMDbMovie, release_date: '' };
      mockTMDbService.searchMovies.mockResolvedValue({
        ...mockTMDbSearchResponse,
        results: [movieWithoutDate],
      });
      mockPrismaClient.movie.findUnique.mockResolvedValue(null);

      // Act
      const result = await service.searchMovies({ query: 'test' });

      // Assert
      expect(result.movies[0].releaseDate).toBeUndefined();
    });
  });
});
