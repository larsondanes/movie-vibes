import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import request from 'supertest';
import { of } from 'rxjs';
import { MoviesResolver } from '../movies.resolver';
import { MoviesService } from '../movies.service';
import { TMDbService } from '../../tmdb/tmdb.service';
import { PrismaClient } from '@movie-vibes/database';

// Mock TMDb API responses
const mockTMDbSearchResponse = {
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

const mockTMDbMovieDetails = {
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
  production_companies: [],
  production_countries: [],
  revenue: 100853753,
  runtime: 139,
  spoken_languages: [],
  status: 'Released',
  tagline: 'Mischief. Mayhem. Soap.',
};

// Mock Prisma Client
const mockPrismaClient = {
  movie: {
    findUnique: jest.fn(),
    create: jest.fn(),
  },
};

describe('Movies Integration Tests', () => {
  let app: INestApplication;
  let _prismaClient: PrismaClient;

  beforeAll(async () => {
    // Mock HTTP requests to TMDb API
    const mockHttpService = {
      get: jest.fn().mockImplementation((url: string) => {
        if (url.includes('/search/movie')) {
          return of({ data: mockTMDbSearchResponse });
        }
        if (url.includes('/movie/popular')) {
          return of({ data: mockTMDbSearchResponse });
        }
        if (url.includes('/movie/now_playing')) {
          return of({ data: mockTMDbSearchResponse });
        }
        if (url.includes('/movie/top_rated')) {
          return of({ data: mockTMDbSearchResponse });
        }
        if (url.includes('/movie/550')) {
          return of({ data: mockTMDbMovieDetails });
        }
        return of({ data: null });
      }),
    };

    const mockConfigService = {
      get: jest.fn().mockReturnValue('test-api-key'),
    };

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          autoSchemaFile: true,
          sortSchema: true,
        }),
      ],
      providers: [
        MoviesResolver,
        MoviesService,
        TMDbService,
        {
          provide: PrismaClient,
          useValue: mockPrismaClient,
        },
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

    app = moduleFixture.createNestApplication();
    _prismaClient = moduleFixture.get<PrismaClient>(PrismaClient);

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(() => {
    jest.clearAllMocks();
    // Default mock: movie not found in database
    mockPrismaClient.movie.findUnique.mockResolvedValue(null);
  });

  describe('searchMovies query', () => {
    const searchMoviesQuery = `
      query SearchMovies($searchInput: SearchMoviesInput!) {
        searchMovies(searchInput: $searchInput) {
          movies {
            id
            tmdbId
            title
            overview
            releaseDate
            posterUrl
            backdropUrl
            voteAverage
          }
          page
          totalPages
          totalResults
        }
      }
    `;

    it('should search movies successfully', async () => {
      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: searchMoviesQuery,
          variables: {
            searchInput: {
              query: 'fight club',
              page: 1,
            },
          },
        })
        .expect(200);

      expect(response.body.data.searchMovies).toEqual({
        movies: [
          {
            id: 'tmdb-550',
            tmdbId: 550,
            title: 'Fight Club',
            overview:
              'A ticking-time-bomb insomniac and a slippery soap salesman...',
            releaseDate: '1999-10-15T00:00:00.000Z',
            posterUrl:
              'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
            backdropUrl:
              'https://image.tmdb.org/t/p/w1280/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg',
            voteAverage: 8.4,
          },
        ],
        page: 1,
        totalPages: 100,
        totalResults: 2000,
      });
    });

    it('should handle search with default page', async () => {
      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: searchMoviesQuery,
          variables: {
            searchInput: {
              query: 'test movie',
            },
          },
        })
        .expect(200);

      expect(response.body.data.searchMovies.page).toBe(1);
    });
  });

  describe('popularMovies query', () => {
    const popularMoviesQuery = `
      query PopularMovies($page: Int) {
        popularMovies(page: $page) {
          movies {
            id
            tmdbId
            title
          }
          page
          totalPages
          totalResults
        }
      }
    `;

    it('should get popular movies successfully', async () => {
      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: popularMoviesQuery,
          variables: { page: 2 },
        })
        .expect(200);

      expect(response.body.data.popularMovies).toEqual({
        movies: [
          {
            id: 'tmdb-550',
            tmdbId: 550,
            title: 'Fight Club',
          },
        ],
        page: 1,
        totalPages: 100,
        totalResults: 2000,
      });
    });
  });

  describe('nowPlayingMovies query', () => {
    const nowPlayingMoviesQuery = `
      query NowPlayingMovies($page: Int) {
        nowPlayingMovies(page: $page) {
          movies {
            id
            tmdbId
            title
          }
          page
        }
      }
    `;

    it('should get now playing movies successfully', async () => {
      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: nowPlayingMoviesQuery,
          variables: { page: 1 },
        })
        .expect(200);

      expect(response.body.data.nowPlayingMovies.page).toBe(1);
      expect(response.body.data.nowPlayingMovies.movies).toHaveLength(1);
    });
  });

  describe('topRatedMovies query', () => {
    const topRatedMoviesQuery = `
      query TopRatedMovies($page: Int) {
        topRatedMovies(page: $page) {
          movies {
            id
            tmdbId
            title
          }
          page
        }
      }
    `;

    it('should get top rated movies successfully', async () => {
      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: topRatedMoviesQuery,
          variables: { page: 3 },
        })
        .expect(200);

      expect(response.body.data.topRatedMovies.page).toBe(1);
      expect(response.body.data.topRatedMovies.movies).toHaveLength(1);
    });
  });

  describe('movie query', () => {
    const movieQuery = `
      query Movie($id: String!) {
        movie(id: $id) {
          id
          tmdbId
          title
          overview
          runtime
          genres
        }
      }
    `;

    it('should get movie by database ID successfully', async () => {
      // Arrange: movie exists in database
      const mockDbMovie = {
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
      };
      mockPrismaClient.movie.findUnique.mockResolvedValue(mockDbMovie);

      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: movieQuery,
          variables: { id: 'uuid-123' },
        })
        .expect(200);

      expect(response.body.data.movie).toEqual({
        id: 'uuid-123',
        tmdbId: 550,
        title: 'Fight Club',
        overview:
          'A ticking-time-bomb insomniac and a slippery soap salesman...',
        runtime: 139,
        genres: ['Drama', 'Thriller'],
      });
    });

    it('should return error for non-existent movie', async () => {
      mockPrismaClient.movie.findUnique.mockResolvedValue(null);

      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: movieQuery,
          variables: { id: 'non-existent' },
        })
        .expect(200);

      expect(response.body.errors).toBeDefined();
      expect(response.body.errors[0].message).toContain('Movie not found');
    });
  });

  describe('movieByTmdbId query', () => {
    const movieByTmdbIdQuery = `
      query MovieByTmdbId($tmdbId: Int!) {
        movieByTmdbId(tmdbId: $tmdbId) {
          id
          tmdbId
          title
          overview
          runtime
          genres
        }
      }
    `;

    it('should get movie by TMDb ID and save to database', async () => {
      // Arrange: movie not in database, will be fetched from TMDb
      const mockCreatedMovie = {
        id: 'uuid-new',
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
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockPrismaClient.movie.create.mockResolvedValue(mockCreatedMovie);

      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: movieByTmdbIdQuery,
          variables: { tmdbId: 550 },
        })
        .expect(200);

      expect(response.body.data.movieByTmdbId).toEqual({
        id: 'uuid-new',
        tmdbId: 550,
        title: 'Fight Club',
        overview:
          'A ticking-time-bomb insomniac and a slippery soap salesman...',
        runtime: 139,
        genres: ['Drama', 'Thriller'],
      });

      // Verify movie was saved to database
      expect(mockPrismaClient.movie.create).toHaveBeenCalledWith({
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
    });
  });

  describe('error handling', () => {
    it('should handle invalid GraphQL syntax', async () => {
      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: 'invalid graphql syntax {',
        })
        .expect(500); // GraphQL parse errors return 500 in this setup

      expect(response.body.errors).toBeDefined();
    });

    it('should handle missing required variables', async () => {
      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: `
            query SearchMovies($searchInput: SearchMoviesInput!) {
              searchMovies(searchInput: $searchInput) {
                movies { id }
              }
            }
          `,
          // Missing searchInput variable
        })
        .expect(200);

      expect(response.body.errors).toBeDefined();
    });
  });
});
