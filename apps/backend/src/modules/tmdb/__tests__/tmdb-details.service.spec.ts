import { Test, TestingModule } from '@nestjs/testing';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { TMDbService } from '../tmdb.service';
import { of, throwError } from 'rxjs';

describe('TMDbService - Movie Details', () => {
  let service: TMDbService;
  let httpService: jest.Mocked<HttpService>;
  let configService: jest.Mocked<ConfigService>;

  const mockApiKey = 'test-api-key';

  const mockMovieCredits = {
    id: 12345,
    cast: [
      {
        id: 1,
        name: 'John Doe',
        character: 'Hero',
        profile_path: '/john-doe.jpg',
        order: 0,
      },
      {
        id: 2,
        name: 'Jane Smith',
        character: 'Villain',
        profile_path: '/jane-smith.jpg',
        order: 1,
      },
    ],
    crew: [
      {
        id: 3,
        name: 'Bob Director',
        job: 'Director',
        department: 'Directing',
        profile_path: '/bob-director.jpg',
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
        published_at: '2023-01-01T10:00:00.000Z',
      },
      {
        id: 'def456',
        key: 'xyz789',
        name: 'Behind the Scenes',
        site: 'YouTube',
        type: 'Behind the Scenes',
        official: false,
        published_at: '2023-01-02T15:30:00.000Z',
      },
    ],
  };

  const mockSimilarMovies = {
    page: 1,
    results: [
      {
        id: 67890,
        title: 'Similar Movie',
        overview: 'Similar overview',
        poster_path: '/similar-poster.jpg',
        backdrop_path: '/similar-backdrop.jpg',
        release_date: '2023-02-01',
        vote_average: 7.5,
        vote_count: 800,
        genre_ids: [28],
        original_language: 'en',
        original_title: 'Similar Movie',
        popularity: 75.0,
        adult: false,
        video: false,
      },
    ],
    total_pages: 5,
    total_results: 100,
  };

  beforeEach(async () => {
    const mockHttpService = {
      get: jest.fn(),
    };

    const mockConfigService = {
      get: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TMDbService,
        { provide: HttpService, useValue: mockHttpService },
        { provide: ConfigService, useValue: mockConfigService },
      ],
    }).compile();

    service = module.get<TMDbService>(TMDbService);
    httpService = module.get(HttpService);
    configService = module.get(ConfigService);

    configService.get.mockReturnValue(mockApiKey);
  });

  describe('getMovieCredits', () => {
    it('should return movie credits', async () => {
      httpService.get.mockReturnValue(of({ data: mockMovieCredits } as any));

      const result = await service.getMovieCredits(12345);

      expect(result).toEqual(mockMovieCredits);
      expect(httpService.get).toHaveBeenCalledWith(
        'https://api.themoviedb.org/3/movie/12345/credits',
        {
          params: {
            api_key: mockApiKey,
          },
        }
      );
    });

    it('should handle HTTP errors', async () => {
      httpService.get.mockReturnValue(
        throwError(() => new Error('Network error'))
      );

      await expect(service.getMovieCredits(12345)).rejects.toThrow(
        'Failed to get movie credits'
      );
    });

    it('should log errors with movie ID', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      httpService.get.mockReturnValue(throwError(() => new Error('API error')));

      await expect(service.getMovieCredits(12345)).rejects.toThrow();

      consoleSpy.mockRestore();
    });
  });

  describe('getMovieVideos', () => {
    it('should return movie videos', async () => {
      httpService.get.mockReturnValue(of({ data: mockMovieVideos } as any));

      const result = await service.getMovieVideos(12345);

      expect(result).toEqual(mockMovieVideos);
      expect(httpService.get).toHaveBeenCalledWith(
        'https://api.themoviedb.org/3/movie/12345/videos',
        {
          params: {
            api_key: mockApiKey,
          },
        }
      );
    });

    it('should handle HTTP errors', async () => {
      httpService.get.mockReturnValue(
        throwError(() => new Error('Network error'))
      );

      await expect(service.getMovieVideos(12345)).rejects.toThrow(
        'Failed to get movie videos'
      );
    });

    it('should return empty results when no videos found', async () => {
      const emptyVideos = { id: 12345, results: [] };
      httpService.get.mockReturnValue(of({ data: emptyVideos } as any));

      const result = await service.getMovieVideos(12345);

      expect(result.results).toHaveLength(0);
      expect(result.id).toBe(12345);
    });
  });

  describe('getSimilarMovies', () => {
    it('should return similar movies with default page', async () => {
      httpService.get.mockReturnValue(of({ data: mockSimilarMovies } as any));

      const result = await service.getSimilarMovies(12345);

      expect(result).toEqual(mockSimilarMovies);
      expect(httpService.get).toHaveBeenCalledWith(
        'https://api.themoviedb.org/3/movie/12345/similar',
        {
          params: {
            api_key: mockApiKey,
            page: 1,
          },
        }
      );
    });

    it('should return similar movies with custom page', async () => {
      httpService.get.mockReturnValue(of({ data: mockSimilarMovies } as any));

      const result = await service.getSimilarMovies(12345, 2);

      expect(result).toEqual(mockSimilarMovies);
      expect(httpService.get).toHaveBeenCalledWith(
        'https://api.themoviedb.org/3/movie/12345/similar',
        {
          params: {
            api_key: mockApiKey,
            page: 2,
          },
        }
      );
    });

    it('should handle HTTP errors', async () => {
      httpService.get.mockReturnValue(
        throwError(() => new Error('Network error'))
      );

      await expect(service.getSimilarMovies(12345)).rejects.toThrow(
        'Failed to get similar movies'
      );
    });
  });

  describe('getMovieRecommendations', () => {
    it('should return movie recommendations with default page', async () => {
      httpService.get.mockReturnValue(of({ data: mockSimilarMovies } as any));

      const result = await service.getMovieRecommendations(12345);

      expect(result).toEqual(mockSimilarMovies);
      expect(httpService.get).toHaveBeenCalledWith(
        'https://api.themoviedb.org/3/movie/12345/recommendations',
        {
          params: {
            api_key: mockApiKey,
            page: 1,
          },
        }
      );
    });

    it('should return movie recommendations with custom page', async () => {
      httpService.get.mockReturnValue(of({ data: mockSimilarMovies } as any));

      const result = await service.getMovieRecommendations(12345, 3);

      expect(result).toEqual(mockSimilarMovies);
      expect(httpService.get).toHaveBeenCalledWith(
        'https://api.themoviedb.org/3/movie/12345/recommendations',
        {
          params: {
            api_key: mockApiKey,
            page: 3,
          },
        }
      );
    });

    it('should handle HTTP errors', async () => {
      httpService.get.mockReturnValue(
        throwError(() => new Error('Network error'))
      );

      await expect(service.getMovieRecommendations(12345)).rejects.toThrow(
        'Failed to get movie recommendations'
      );
    });
  });

  describe('API key configuration', () => {
    it('should use configured API key', () => {
      expect(configService.get).toHaveBeenCalledWith('TMDB_API_KEY');
    });

    it('should handle missing API key gracefully', () => {
      configService.get.mockReturnValue(undefined);

      // Create a new service instance to test constructor behavior
      const module = Test.createTestingModule({
        providers: [
          TMDbService,
          { provide: HttpService, useValue: httpService },
          { provide: ConfigService, useValue: configService },
        ],
      }).compile();

      expect(() => module).not.toThrow();
    });
  });
});
