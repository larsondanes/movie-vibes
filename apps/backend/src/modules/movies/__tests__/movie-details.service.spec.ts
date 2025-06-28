import { Test, TestingModule } from '@nestjs/testing';
import { PrismaClient } from '@movie-vibes/database';
import { MoviesService } from '../movies.service';
import { TMDbService } from '../../tmdb/tmdb.service';

describe('MoviesService - Movie Details', () => {
  let service: MoviesService;
  let prisma: {
    movie: {
      findUnique: jest.MockedFunction<any>;
      create: jest.MockedFunction<any>;
    };
  };
  let tmdbService: jest.Mocked<TMDbService>;

  const mockTMDbMovieDetails = {
    id: 12345,
    title: 'Test Movie',
    overview: 'Test overview',
    poster_path: '/test-poster.jpg',
    backdrop_path: '/test-backdrop.jpg',
    release_date: '2023-01-01',
    vote_average: 8.5,
    vote_count: 1000,
    runtime: 120,
    budget: 50000000,
    revenue: 150000000,
    homepage: 'https://test-movie.com',
    imdb_id: 'tt1234567',
    original_language: 'en',
    original_title: 'Test Movie',
    popularity: 85.5,
    status: 'Released',
    tagline: 'Test tagline',
    adult: false,
    genre_ids: [28, 12],
    belongs_to_collection: {
      id: 1,
      name: 'Test Collection',
      poster_path: '/collection-poster.jpg',
      backdrop_path: '/collection-backdrop.jpg',
    },
    genres: [
      { id: 28, name: 'Action' },
      { id: 12, name: 'Adventure' },
    ],
    production_companies: [
      {
        id: 1,
        name: 'Test Studios',
        logo_path: '/studio-logo.jpg',
        origin_country: 'US',
      },
    ],
    production_countries: [
      {
        iso_3166_1: 'US',
        name: 'United States of America',
      },
    ],
    spoken_languages: [
      {
        english_name: 'English',
        iso_639_1: 'en',
        name: 'English',
      },
    ],
    video: false,
  };

  const mockTMDbCredits = {
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

  const mockTMDbVideos = {
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
    ],
  };

  const mockDbMovie = {
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
  };

  beforeEach(async () => {
    const mockPrisma = {
      movie: {
        findUnique: jest.fn(),
        create: jest.fn(),
      },
    };

    const mockTMDbService = {
      getMovieDetails: jest.fn(),
      getMovieCredits: jest.fn(),
      getMovieVideos: jest.fn(),
      getSimilarMovies: jest.fn(),
      getMovieRecommendations: jest.fn(),
      getImageUrl: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MoviesService,
        { provide: PrismaClient, useValue: mockPrisma },
        { provide: TMDbService, useValue: mockTMDbService },
      ],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
    prisma = module.get(PrismaClient);
    tmdbService = module.get(TMDbService);
  });

  describe('getMovieDetails', () => {
    it('should return detailed movie information', async () => {
      tmdbService.getMovieDetails.mockResolvedValue(mockTMDbMovieDetails);
      prisma.movie.findUnique.mockResolvedValue(mockDbMovie);
      tmdbService.getImageUrl.mockImplementation((path, size) =>
        path ? `https://image.tmdb.org/t/p/${size || 'w500'}${path}` : null
      );

      const result = await service.getMovieDetails(12345);

      expect(result).toMatchObject({
        id: 'db-movie-id',
        tmdbId: 12345,
        title: 'Test Movie',
        overview: 'Test overview',
        runtime: 120,
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
      });

      expect(result.belongsToCollection).toMatchObject({
        id: 1,
        name: 'Test Collection',
        posterPath: '/collection-poster.jpg',
        backdropPath: '/collection-backdrop.jpg',
      });

      expect(result.productionCompanies).toHaveLength(1);
      expect(result.productionCompanies[0]).toMatchObject({
        id: 1,
        name: 'Test Studios',
        logoPath: '/studio-logo.jpg',
        originCountry: 'US',
      });

      expect(tmdbService.getMovieDetails).toHaveBeenCalledWith(12345);
    });

    it('should create movie in database if not exists', async () => {
      tmdbService.getMovieDetails.mockResolvedValue(mockTMDbMovieDetails);
      prisma.movie.findUnique.mockResolvedValue(null);
      prisma.movie.create.mockResolvedValue(mockDbMovie);
      tmdbService.getImageUrl.mockImplementation((path, size) =>
        path ? `https://image.tmdb.org/t/p/${size || 'w500'}${path}` : null
      );

      const result = await service.getMovieDetails(12345);

      expect(prisma.movie.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          tmdbId: 12345,
          title: 'Test Movie',
          overview: 'Test overview',
          runtime: 120,
          genres: ['Action', 'Adventure'],
        }),
      });
      expect(result.id).toBe('db-movie-id');
    });

    it('should handle errors gracefully', async () => {
      tmdbService.getMovieDetails.mockRejectedValue(
        new Error('TMDb API error')
      );

      await expect(service.getMovieDetails(12345)).rejects.toThrow(
        'Failed to get movie details'
      );
    });
  });

  describe('getMovieCredits', () => {
    it('should return movie credits with cast and crew', async () => {
      tmdbService.getMovieCredits.mockResolvedValue(mockTMDbCredits);
      tmdbService.getImageUrl.mockImplementation((path, size) =>
        path ? `https://image.tmdb.org/t/p/${size || 'w500'}${path}` : null
      );

      const result = await service.getMovieCredits(12345);

      expect(result).toMatchObject({
        id: 12345,
        cast: [
          {
            id: 1,
            name: 'John Doe',
            character: 'Hero',
            profilePath: '/john-doe.jpg',
            order: 0,
          },
          {
            id: 2,
            name: 'Jane Smith',
            character: 'Villain',
            profilePath: '/jane-smith.jpg',
            order: 1,
          },
        ],
        crew: [
          {
            id: 3,
            name: 'Bob Director',
            job: 'Director',
            department: 'Directing',
            profilePath: '/bob-director.jpg',
          },
        ],
      });

      expect(tmdbService.getMovieCredits).toHaveBeenCalledWith(12345);
    });

    it('should handle errors gracefully', async () => {
      tmdbService.getMovieCredits.mockRejectedValue(
        new Error('TMDb API error')
      );

      await expect(service.getMovieCredits(12345)).rejects.toThrow(
        'Failed to get movie credits'
      );
    });
  });

  describe('getMovieVideos', () => {
    it('should return movie videos', async () => {
      tmdbService.getMovieVideos.mockResolvedValue(mockTMDbVideos);

      const result = await service.getMovieVideos(12345);

      expect(result).toMatchObject({
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
      });

      expect(tmdbService.getMovieVideos).toHaveBeenCalledWith(12345);
    });

    it('should handle errors gracefully', async () => {
      tmdbService.getMovieVideos.mockRejectedValue(new Error('TMDb API error'));

      await expect(service.getMovieVideos(12345)).rejects.toThrow(
        'Failed to get movie videos'
      );
    });
  });

  describe('getSimilarMovies', () => {
    it('should return similar movies', async () => {
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

      tmdbService.getSimilarMovies.mockResolvedValue(mockSimilarMovies);
      prisma.movie.findUnique.mockResolvedValue(null);
      tmdbService.getImageUrl.mockImplementation((path, size) =>
        path ? `https://image.tmdb.org/t/p/${size || 'w500'}${path}` : null
      );

      const result = await service.getSimilarMovies(12345, 1);

      expect(result).toMatchObject({
        movies: [
          expect.objectContaining({
            tmdbId: 67890,
            title: 'Similar Movie',
            overview: 'Similar overview',
          }),
        ],
        page: 1,
        totalPages: 5,
        totalResults: 100,
      });

      expect(tmdbService.getSimilarMovies).toHaveBeenCalledWith(12345, 1);
    });

    it('should handle errors gracefully', async () => {
      tmdbService.getSimilarMovies.mockRejectedValue(
        new Error('TMDb API error')
      );

      await expect(service.getSimilarMovies(12345)).rejects.toThrow(
        'Failed to get similar movies'
      );
    });
  });

  describe('getMovieRecommendations', () => {
    it('should return movie recommendations', async () => {
      const mockRecommendations = {
        page: 1,
        results: [
          {
            id: 99999,
            title: 'Recommended Movie',
            overview: 'Recommended overview',
            poster_path: '/recommended-poster.jpg',
            backdrop_path: '/recommended-backdrop.jpg',
            release_date: '2023-03-01',
            vote_average: 9.0,
            vote_count: 1200,
            genre_ids: [12],
            original_language: 'en',
            original_title: 'Recommended Movie',
            popularity: 95.0,
            adult: false,
            video: false,
          },
        ],
        total_pages: 3,
        total_results: 60,
      };

      tmdbService.getMovieRecommendations.mockResolvedValue(
        mockRecommendations
      );
      prisma.movie.findUnique.mockResolvedValue(null);
      tmdbService.getImageUrl.mockImplementation((path, size) =>
        path ? `https://image.tmdb.org/t/p/${size || 'w500'}${path}` : null
      );

      const result = await service.getMovieRecommendations(12345, 1);

      expect(result).toMatchObject({
        movies: [
          expect.objectContaining({
            tmdbId: 99999,
            title: 'Recommended Movie',
            overview: 'Recommended overview',
          }),
        ],
        page: 1,
        totalPages: 3,
        totalResults: 60,
      });

      expect(tmdbService.getMovieRecommendations).toHaveBeenCalledWith(
        12345,
        1
      );
    });

    it('should handle errors gracefully', async () => {
      tmdbService.getMovieRecommendations.mockRejectedValue(
        new Error('TMDb API error')
      );

      await expect(service.getMovieRecommendations(12345)).rejects.toThrow(
        'Failed to get movie recommendations'
      );
    });
  });
});
