import { Test, TestingModule } from '@nestjs/testing';
import { MoviesResolver } from '../movies.resolver';
import { MoviesService } from '../movies.service';

describe('MoviesResolver - Movie Details', () => {
  let resolver: MoviesResolver;
  let moviesService: jest.Mocked<MoviesService>;

  const mockMovieDetails = {
    id: 'db-movie-id',
    tmdbId: 12345,
    title: 'Test Movie',
    overview: 'Test overview',
    releaseDate: new Date('2023-01-01'),
    runtime: 120,
    posterPath: '/test-poster.jpg',
    backdropPath: '/test-backdrop.jpg',
    voteAverage: 8.5,
    genres: ['Action', 'Adventure'],
    createdAt: new Date(),
    updatedAt: new Date(),
    posterUrl: 'https://image.tmdb.org/t/p/w500/test-poster.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/test-backdrop.jpg',
    budget: 50000000,
    revenue: 150000000,
    homepage: 'https://test-movie.com',
    imdbId: 'tt1234567',
    originalLanguage: 'en',
    originalTitle: 'Test Movie',
    popularity: 85.5,
    status: 'Released',
    tagline: 'Test tagline',
    adult: false,
    voteCount: 1000,
    belongsToCollection: {
      id: 1,
      name: 'Test Collection',
      posterPath: '/collection-poster.jpg',
      backdropPath: '/collection-backdrop.jpg',
      posterUrl: 'https://image.tmdb.org/t/p/w500/collection-poster.jpg',
      backdropUrl: 'https://image.tmdb.org/t/p/w1280/collection-backdrop.jpg',
    },
    productionCompanies: [
      {
        id: 1,
        name: 'Test Studios',
        logoPath: '/studio-logo.jpg',
        originCountry: 'US',
        logoUrl: 'https://image.tmdb.org/t/p/w200/studio-logo.jpg',
      },
    ],
    productionCountries: [
      {
        iso31661: 'US',
        name: 'United States of America',
      },
    ],
    spokenLanguages: [
      {
        englishName: 'English',
        iso6391: 'en',
        name: 'English',
      },
    ],
  };

  const mockMovieCredits = {
    id: 12345,
    cast: [
      {
        id: 1,
        name: 'John Doe',
        character: 'Hero',
        profilePath: '/john-doe.jpg',
        order: 0,
        profileUrl: 'https://image.tmdb.org/t/p/w185/john-doe.jpg',
      },
    ],
    crew: [
      {
        id: 3,
        name: 'Bob Director',
        job: 'Director',
        department: 'Directing',
        profilePath: '/bob-director.jpg',
        profileUrl: 'https://image.tmdb.org/t/p/w185/bob-director.jpg',
      },
    ],
  };

  const mockMovieVideos = {
    id: 12345,
    results: [
      {
        id: 'abc123',
        key: 'dQw4w9WgXcQ',
        name: 'Official Trailer',
        site: 'YouTube',
        type: 'Trailer',
        official: true,
        publishedAt: '2023-01-01T10:00:00.000Z',
      },
    ],
  };

  const mockMovieSearchResult = {
    movies: [
      {
        id: 'tmdb-67890',
        tmdbId: 67890,
        title: 'Similar Movie',
        overview: 'Similar overview',
        releaseDate: new Date('2023-02-01'),
        runtime: null,
        posterPath: '/similar-poster.jpg',
        backdropPath: '/similar-backdrop.jpg',
        voteAverage: 7.5,
        genres: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        posterUrl: 'https://image.tmdb.org/t/p/w500/similar-poster.jpg',
        backdropUrl: 'https://image.tmdb.org/t/p/w1280/similar-backdrop.jpg',
      },
    ],
    page: 1,
    totalPages: 5,
    totalResults: 100,
  };

  beforeEach(async () => {
    const mockMoviesService = {
      getMovieDetails: jest.fn(),
      getMovieCredits: jest.fn(),
      getMovieVideos: jest.fn(),
      getSimilarMovies: jest.fn(),
      getMovieRecommendations: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MoviesResolver,
        { provide: MoviesService, useValue: mockMoviesService },
      ],
    }).compile();

    resolver = module.get<MoviesResolver>(MoviesResolver);
    moviesService = module.get(MoviesService);
  });

  describe('getMovieDetails', () => {
    it('should return detailed movie information', async () => {
      moviesService.getMovieDetails.mockResolvedValue(mockMovieDetails);

      const result = await resolver.getMovieDetails(12345);

      expect(result).toEqual(mockMovieDetails);
      expect(moviesService.getMovieDetails).toHaveBeenCalledWith(12345);
    });

    it('should handle service errors', async () => {
      moviesService.getMovieDetails.mockRejectedValue(
        new Error('Service error')
      );

      await expect(resolver.getMovieDetails(12345)).rejects.toThrow(
        'Service error'
      );
    });
  });

  describe('getMovieCredits', () => {
    it('should return movie credits', async () => {
      moviesService.getMovieCredits.mockResolvedValue(mockMovieCredits);

      const result = await resolver.getMovieCredits(12345);

      expect(result).toEqual(mockMovieCredits);
      expect(moviesService.getMovieCredits).toHaveBeenCalledWith(12345);
    });

    it('should handle service errors', async () => {
      moviesService.getMovieCredits.mockRejectedValue(
        new Error('Service error')
      );

      await expect(resolver.getMovieCredits(12345)).rejects.toThrow(
        'Service error'
      );
    });
  });

  describe('getMovieVideos', () => {
    it('should return movie videos', async () => {
      moviesService.getMovieVideos.mockResolvedValue(mockMovieVideos);

      const result = await resolver.getMovieVideos(12345);

      expect(result).toEqual(mockMovieVideos);
      expect(moviesService.getMovieVideos).toHaveBeenCalledWith(12345);
    });

    it('should handle service errors', async () => {
      moviesService.getMovieVideos.mockRejectedValue(
        new Error('Service error')
      );

      await expect(resolver.getMovieVideos(12345)).rejects.toThrow(
        'Service error'
      );
    });
  });

  describe('getSimilarMovies', () => {
    it('should return similar movies with default page', async () => {
      moviesService.getSimilarMovies.mockResolvedValue(mockMovieSearchResult);

      const result = await resolver.getSimilarMovies(12345, 1);

      expect(result).toEqual(mockMovieSearchResult);
      expect(moviesService.getSimilarMovies).toHaveBeenCalledWith(12345, 1);
    });

    it('should return similar movies with custom page', async () => {
      moviesService.getSimilarMovies.mockResolvedValue(mockMovieSearchResult);

      const result = await resolver.getSimilarMovies(12345, 2);

      expect(result).toEqual(mockMovieSearchResult);
      expect(moviesService.getSimilarMovies).toHaveBeenCalledWith(12345, 2);
    });

    it('should handle service errors', async () => {
      moviesService.getSimilarMovies.mockRejectedValue(
        new Error('Service error')
      );

      await expect(resolver.getSimilarMovies(12345, 1)).rejects.toThrow(
        'Service error'
      );
    });
  });

  describe('getMovieRecommendations', () => {
    it('should return movie recommendations with default page', async () => {
      moviesService.getMovieRecommendations.mockResolvedValue(
        mockMovieSearchResult
      );

      const result = await resolver.getMovieRecommendations(12345, 1);

      expect(result).toEqual(mockMovieSearchResult);
      expect(moviesService.getMovieRecommendations).toHaveBeenCalledWith(
        12345,
        1
      );
    });

    it('should return movie recommendations with custom page', async () => {
      moviesService.getMovieRecommendations.mockResolvedValue(
        mockMovieSearchResult
      );

      const result = await resolver.getMovieRecommendations(12345, 3);

      expect(result).toEqual(mockMovieSearchResult);
      expect(moviesService.getMovieRecommendations).toHaveBeenCalledWith(
        12345,
        3
      );
    });

    it('should handle service errors', async () => {
      moviesService.getMovieRecommendations.mockRejectedValue(
        new Error('Service error')
      );

      await expect(resolver.getMovieRecommendations(12345, 1)).rejects.toThrow(
        'Service error'
      );
    });
  });
});
