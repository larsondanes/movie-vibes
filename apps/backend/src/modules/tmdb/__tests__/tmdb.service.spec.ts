import { Test, TestingModule } from '@nestjs/testing';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { of, throwError } from 'rxjs';
import { AxiosResponse } from 'axios';
import {
  TMDbService,
  TMDbSearchResponse,
  TMDbMovieDetails,
} from '../tmdb.service';

const mockTMDbSearchResponse: TMDbSearchResponse = {
  page: 1,
  total_pages: 100,
  total_results: 2000,
  results: [
    {
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
    },
  ],
};

const mockTMDbMovieDetails: TMDbMovieDetails = {
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
  belongs_to_collection: null,
  budget: 63000000,
  genres: [
    { id: 18, name: 'Drama' },
    { id: 53, name: 'Thriller' },
  ],
  homepage: 'http://www.foxmovies.com/movies/fight-club',
  imdb_id: 'tt0137523',
  production_companies: [
    {
      id: 508,
      logo_path: '/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png',
      name: '20th Century Fox',
      origin_country: 'US',
    },
  ],
  production_countries: [
    { iso_3166_1: 'US', name: 'United States of America' },
  ],
  revenue: 100853753,
  runtime: 139,
  spoken_languages: [
    { english_name: 'English', iso_639_1: 'en', name: 'English' },
  ],
  status: 'Released',
  tagline: 'Mischief. Mayhem. Soap.',
};

const mockHttpService = {
  get: jest.fn(),
};

const mockConfigService = {
  get: jest.fn(),
};

describe('TMDbService', () => {
  let service: TMDbService;
  let httpService: HttpService;
  let configService: ConfigService;
  let loggerSpy: jest.SpyInstance;

  beforeEach(async () => {
    // Reset mocks before creating module
    jest.clearAllMocks();

    // Setup default mock implementations
    mockConfigService.get.mockReturnValue('test-api-key');

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TMDbService,
        {
          provide: HttpService,
          useValue: mockHttpService,
        },
        {
          provide: ConfigService,
          useValue: mockConfigService,
        },
      ],
    }).compile();

    service = module.get<TMDbService>(TMDbService);
    httpService = module.get<HttpService>(HttpService);
    configService = module.get<ConfigService>(ConfigService);

    // Mock Logger methods
    loggerSpy = jest
      .spyOn(Logger.prototype, 'warn')
      .mockImplementation(() => {});
    jest.spyOn(Logger.prototype, 'debug').mockImplementation(() => {});
    jest.spyOn(Logger.prototype, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    loggerSpy.mockRestore();
  });

  describe('constructor', () => {
    it('should initialize with API key from config', () => {
      expect(configService.get).toHaveBeenCalledWith('TMDB_API_KEY');
      expect(service).toBeDefined();
    });

    it('should warn when API key is not configured', async () => {
      // Clear previous mock and set to return undefined
      jest.clearAllMocks();
      mockConfigService.get.mockReturnValue(undefined);

      // Create new instance to trigger constructor
      const module = await Test.createTestingModule({
        providers: [
          TMDbService,
          {
            provide: HttpService,
            useValue: mockHttpService,
          },
          {
            provide: ConfigService,
            useValue: mockConfigService,
          },
        ],
      }).compile();

      // Get the service to trigger constructor
      module.get<TMDbService>(TMDbService);

      expect(loggerSpy).toHaveBeenCalledWith(
        'TMDB_API_KEY not configured. Movie features will not work.'
      );
    });
  });

  describe('searchMovies', () => {
    it('should return search results successfully', async () => {
      // Arrange
      const mockResponse: AxiosResponse<TMDbSearchResponse> = {
        data: mockTMDbSearchResponse,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {} as any,
      };
      mockHttpService.get.mockReturnValue(of(mockResponse));

      // Act
      const result = await service.searchMovies('fight club', 1);

      // Assert
      expect(result).toEqual(mockTMDbSearchResponse);
      expect(httpService.get).toHaveBeenCalledWith(
        'https://api.themoviedb.org/3/search/movie',
        {
          params: {
            api_key: 'test-api-key',
            query: 'fight club',
            page: 1,
            include_adult: false,
          },
        }
      );
    });

    it('should use default page 1 when page is not provided', async () => {
      // Arrange
      const mockResponse: AxiosResponse<TMDbSearchResponse> = {
        data: mockTMDbSearchResponse,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {} as any,
      };
      mockHttpService.get.mockReturnValue(of(mockResponse));

      // Act
      await service.searchMovies('test');

      // Assert
      expect(httpService.get).toHaveBeenCalledWith(
        'https://api.themoviedb.org/3/search/movie',
        {
          params: {
            api_key: 'test-api-key',
            query: 'test',
            page: 1,
            include_adult: false,
          },
        }
      );
    });

    it('should handle API errors and throw custom error', async () => {
      // Arrange
      const apiError = new Error('Request failed with status code 401');
      mockHttpService.get.mockReturnValue(throwError(() => apiError));

      // Act & Assert
      await expect(service.searchMovies('test')).rejects.toThrow(
        'Failed to search movies'
      );
      expect(Logger.prototype.error).toHaveBeenCalledWith(
        'Failed to search movies: Request failed with status code 401',
        expect.any(String)
      );
    });

    it('should handle unknown errors', async () => {
      // Arrange
      mockHttpService.get.mockReturnValue(throwError(() => 'String error'));

      // Act & Assert
      await expect(service.searchMovies('test')).rejects.toThrow(
        'Failed to search movies'
      );
      expect(Logger.prototype.error).toHaveBeenCalledWith(
        'Failed to search movies: Unknown error',
        undefined
      );
    });
  });

  describe('getMovieDetails', () => {
    it('should return movie details successfully', async () => {
      // Arrange
      const mockResponse: AxiosResponse<TMDbMovieDetails> = {
        data: mockTMDbMovieDetails,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {} as any,
      };
      mockHttpService.get.mockReturnValue(of(mockResponse));

      // Act
      const result = await service.getMovieDetails(550);

      // Assert
      expect(result).toEqual(mockTMDbMovieDetails);
      expect(httpService.get).toHaveBeenCalledWith(
        'https://api.themoviedb.org/3/movie/550',
        {
          params: {
            api_key: 'test-api-key',
          },
        }
      );
    });

    it('should handle API errors and throw custom error', async () => {
      // Arrange
      const apiError = new Error('Request failed with status code 404');
      mockHttpService.get.mockReturnValue(throwError(() => apiError));

      // Act & Assert
      await expect(service.getMovieDetails(999)).rejects.toThrow(
        'Failed to get movie details'
      );
      expect(Logger.prototype.error).toHaveBeenCalledWith(
        'Failed to get movie details for ID 999: Request failed with status code 404',
        expect.any(String)
      );
    });
  });

  describe('getPopularMovies', () => {
    it('should return popular movies successfully', async () => {
      // Arrange
      const mockResponse: AxiosResponse<TMDbSearchResponse> = {
        data: mockTMDbSearchResponse,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {} as any,
      };
      mockHttpService.get.mockReturnValue(of(mockResponse));

      // Act
      const result = await service.getPopularMovies(2);

      // Assert
      expect(result).toEqual(mockTMDbSearchResponse);
      expect(httpService.get).toHaveBeenCalledWith(
        'https://api.themoviedb.org/3/movie/popular',
        {
          params: {
            api_key: 'test-api-key',
            page: 2,
          },
        }
      );
    });

    it('should use default page 1 when page is not provided', async () => {
      // Arrange
      const mockResponse: AxiosResponse<TMDbSearchResponse> = {
        data: mockTMDbSearchResponse,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {} as any,
      };
      mockHttpService.get.mockReturnValue(of(mockResponse));

      // Act
      await service.getPopularMovies();

      // Assert
      expect(httpService.get).toHaveBeenCalledWith(
        'https://api.themoviedb.org/3/movie/popular',
        {
          params: {
            api_key: 'test-api-key',
            page: 1,
          },
        }
      );
    });
  });

  describe('getNowPlayingMovies', () => {
    it('should return now playing movies successfully', async () => {
      // Arrange
      const mockResponse: AxiosResponse<TMDbSearchResponse> = {
        data: mockTMDbSearchResponse,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {} as any,
      };
      mockHttpService.get.mockReturnValue(of(mockResponse));

      // Act
      const result = await service.getNowPlayingMovies(3);

      // Assert
      expect(result).toEqual(mockTMDbSearchResponse);
      expect(httpService.get).toHaveBeenCalledWith(
        'https://api.themoviedb.org/3/movie/now_playing',
        {
          params: {
            api_key: 'test-api-key',
            page: 3,
          },
        }
      );
    });
  });

  describe('getTopRatedMovies', () => {
    it('should return top rated movies successfully', async () => {
      // Arrange
      const mockResponse: AxiosResponse<TMDbSearchResponse> = {
        data: mockTMDbSearchResponse,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {} as any,
      };
      mockHttpService.get.mockReturnValue(of(mockResponse));

      // Act
      const result = await service.getTopRatedMovies();

      // Assert
      expect(result).toEqual(mockTMDbSearchResponse);
      expect(httpService.get).toHaveBeenCalledWith(
        'https://api.themoviedb.org/3/movie/top_rated',
        {
          params: {
            api_key: 'test-api-key',
            page: 1,
          },
        }
      );
    });
  });

  describe('getImageUrl', () => {
    it('should return complete image URL when path is provided', () => {
      // Act
      const result = service.getImageUrl('/path/to/image.jpg', 'w300');

      // Assert
      expect(result).toBe('https://image.tmdb.org/t/p/w300/path/to/image.jpg');
    });

    it('should use default size w500 when size is not provided', () => {
      // Act
      const result = service.getImageUrl('/path/to/image.jpg');

      // Assert
      expect(result).toBe('https://image.tmdb.org/t/p/w500/path/to/image.jpg');
    });

    it('should return null when path is null', () => {
      // Act
      const result = service.getImageUrl(null);

      // Assert
      expect(result).toBeNull();
    });

    it('should return null when path is empty', () => {
      // Act
      const result = service.getImageUrl('');

      // Assert
      expect(result).toBeNull();
    });
  });
});
