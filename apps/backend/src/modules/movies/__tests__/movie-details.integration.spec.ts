import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, LogLevel } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { join } from 'path';
import request from 'supertest';
import { PrismaClient } from '@movie-vibes/database';
import { TMDbService } from '../../tmdb/tmdb.service';
import { TMDbModule } from '../../tmdb/tmdb.module';
import { MoviesModule } from '../movies.module';

describe('Movie Details Integration', () => {
  let app: INestApplication;
  let _prisma: PrismaClient;
  let tmdbService: TMDbService;

  // Environment-based configuration
  const ENABLE_TEST_LOGS = process.env.ENABLE_TEST_LOGS === 'true';
  const USE_REAL_TMDB_API = process.env.USE_REAL_TMDB_API === 'true';

  const mockPrisma = {
    movie: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
  };

  // Mock TMDb responses for predictable testing
  const mockTMDbMovieDetails = {
    id: 550,
    title: 'Fight Club',
    overview: 'A ticking-time-bomb insomniac and a slippery soap salesman...',
    poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    backdrop_path: '/52AfXWuXCHn3UjD17rBruA9f5qb.jpg',
    release_date: '1999-10-15',
    vote_average: 8.433,
    vote_count: 2189,
    runtime: 139,
    budget: 63000000,
    revenue: 100853753,
    homepage: null,
    imdb_id: 'tt0137523',
    original_language: 'en',
    original_title: 'Fight Club',
    popularity: 85.796,
    status: 'Released',
    tagline: 'Mischief. Mayhem. Soap.',
    adult: false,
    genre_ids: [18],
    belongs_to_collection: null,
    genres: [{ id: 18, name: 'Drama' }],
    production_companies: [
      {
        id: 508,
        name: '20th Century Fox',
        logo_path: '/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png',
        origin_country: 'US',
      },
    ],
    production_countries: [
      { iso_3166_1: 'US', name: 'United States of America' },
    ],
    spoken_languages: [
      { english_name: 'English', iso_639_1: 'en', name: 'English' },
    ],
    video: false,
  };

  const mockTMDbCredits = {
    id: 550,
    cast: [
      {
        id: 819,
        name: 'Edward Norton',
        character: 'The Narrator',
        profile_path: '/5XBzD5WuTyVQZeS4VI25z2moMeY.jpg',
        order: 0,
      },
      {
        id: 287,
        name: 'Brad Pitt',
        character: 'Tyler Durden',
        profile_path: '/cckcYc2v0yh1tc9QjRelptcOBko.jpg',
        order: 1,
      },
    ],
    crew: [
      {
        id: 7467,
        name: 'David Fincher',
        job: 'Director',
        department: 'Directing',
        profile_path: '/tpEczFclQZeKAiCeKZZ0adRvtfz.jpg',
      },
    ],
  };

  const mockTMDbVideos = {
    id: 550,
    results: [
      {
        id: '533ec654c3a36854480003eb',
        key: 'SUXWAEX2jlg',
        name: 'Trailer 1',
        site: 'YouTube',
        type: 'Trailer',
        official: false,
        published_at: '2013-04-03T16:40:51.000Z',
      },
    ],
  };

  const mockTMDbSearchResponse = {
    page: 1,
    results: [
      {
        id: 807,
        title: 'Se7en',
        overview:
          'Two homicide detectives are on a desperate hunt for a serial killer...',
        poster_path: '/6yoghtyTpznpBik8EngEmJskVUO.jpg',
        backdrop_path: '/tF7UlLnFll8s9DiUBJK1XCDzwJ0.jpg',
        release_date: '1995-09-22',
        vote_average: 8.378,
        vote_count: 15180,
        genre_ids: [80, 18, 9648, 53],
        original_language: 'en',
        original_title: 'Se7en',
        popularity: 114.297,
        adult: false,
        video: false,
      },
    ],
    total_pages: 3,
    total_results: 60,
  };

  const mockTMDbService = {
    getMovieDetails: jest.fn().mockResolvedValue(mockTMDbMovieDetails),
    getMovieCredits: jest.fn().mockResolvedValue(mockTMDbCredits),
    getMovieVideos: jest.fn().mockResolvedValue(mockTMDbVideos),
    getSimilarMovies: jest.fn().mockResolvedValue(mockTMDbSearchResponse),
    getMovieRecommendations: jest
      .fn()
      .mockResolvedValue(mockTMDbSearchResponse),
    getImageUrl: jest
      .fn()
      .mockImplementation((path: string | null, size = 'w500') =>
        path ? `https://image.tmdb.org/t/p/${size}${path}` : null
      ),
  };

  beforeAll(async () => {
    // Configure logging based on environment variable
    const logLevels: LogLevel[] = ENABLE_TEST_LOGS
      ? ['log', 'error', 'warn', 'debug', 'verbose']
      : ['error']; // Only show errors by default

    const moduleBuilder = Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: '.env',
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
          playground: false,
          introspection: true,
        }),
        HttpModule,
        TMDbModule,
        MoviesModule,
      ],
    })
      .overrideProvider(PrismaClient)
      .useValue(mockPrisma);

    // Conditionally mock TMDbService based on environment variable
    if (!USE_REAL_TMDB_API) {
      moduleBuilder.overrideProvider(TMDbService).useValue(mockTMDbService);
    }

    const moduleFixture: TestingModule = await moduleBuilder.compile();

    app = moduleFixture.createNestApplication({
      logger: logLevels,
    });

    _prisma = moduleFixture.get<PrismaClient>(PrismaClient);
    tmdbService = moduleFixture.get<TMDbService>(TMDbService);

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('movieDetails query', () => {
    const mockMovie = {
      id: 'db-movie-id',
      tmdbId: 550,
      title: 'Fight Club',
      overview: 'A ticking-time-bomb insomniac and a slippery soap salesman...',
      releaseDate: new Date('1999-10-15'),
      runtime: 139,
      posterPath: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      backdropPath: '/52AfXWuXCHn3UjD17rBruA9f5qb.jpg',
      voteAverage: 8.433,
      genres: ['Drama'],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const movieDetailsQuery = `
      query MovieDetails($tmdbId: Int!) {
        movieDetails(tmdbId: $tmdbId) {
          id
          tmdbId
          title
          overview
          releaseDate
          runtime
          posterPath
          backdropPath
          voteAverage
          genres
          posterUrl
          backdropUrl
          budget
          revenue
          homepage
          imdbId
          originalLanguage
          originalTitle
          popularity
          status
          tagline
          adult
          voteCount
          belongsToCollection {
            id
            name
            posterPath
            backdropPath
          }
          productionCompanies {
            id
            name
            logoPath
            originCountry
          }
          productionCountries {
            iso31661
            name
          }
          spokenLanguages {
            englishName
            iso6391
            name
          }
        }
      }
    `;

    it('should return comprehensive movie details', async () => {
      mockPrisma.movie.findUnique.mockResolvedValue(mockMovie);

      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: movieDetailsQuery,
          variables: { tmdbId: 550 },
        })
        .expect(200);

      expect(response.body.data.movieDetails).toMatchObject({
        id: 'db-movie-id',
        tmdbId: 550,
        title: 'Fight Club',
        overview: expect.stringContaining('insomniac'),
        runtime: expect.any(Number),
        genres: expect.any(Array),
      });

      expect(response.body.data.movieDetails.productionCompanies).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            originCountry: expect.any(String),
          }),
        ])
      );
    });

    it('should handle movie not in database', async () => {
      mockPrisma.movie.findUnique.mockResolvedValue(null);
      mockPrisma.movie.create.mockResolvedValue(mockMovie);

      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: movieDetailsQuery,
          variables: { tmdbId: 550 },
        })
        .expect(200);

      expect(response.body.data.movieDetails).toBeDefined();
      expect(mockPrisma.movie.create).toHaveBeenCalled();
    });
  });

  describe('movieCredits query', () => {
    const movieCreditsQuery = `
      query MovieCredits($tmdbId: Int!) {
        movieCredits(tmdbId: $tmdbId) {
          id
          cast {
            id
            name
            character
            profilePath
            order
            profileUrl
          }
          crew {
            id
            name
            job
            department
            profilePath
            profileUrl
          }
        }
      }
    `;

    it('should return movie credits with cast and crew', async () => {
      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: movieCreditsQuery,
          variables: { tmdbId: 550 },
        })
        .expect(200);

      expect(response.body.data.movieCredits).toMatchObject({
        id: 550,
        cast: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            character: expect.any(String),
            order: expect.any(Number),
          }),
        ]),
        crew: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            job: expect.any(String),
            department: expect.any(String),
          }),
        ]),
      });
    });
  });

  describe('movieVideos query', () => {
    const movieVideosQuery = `
      query MovieVideos($tmdbId: Int!) {
        movieVideos(tmdbId: $tmdbId) {
          id
          results {
            id
            key
            name
            site
            type
            official
            publishedAt
          }
        }
      }
    `;

    it('should return movie videos', async () => {
      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: movieVideosQuery,
          variables: { tmdbId: 550 },
        })
        .expect(200);

      expect(response.body.data.movieVideos).toMatchObject({
        id: 550,
        results: expect.any(Array),
      });

      if (response.body.data.movieVideos.results.length > 0) {
        expect(response.body.data.movieVideos.results[0]).toMatchObject({
          id: expect.any(String),
          key: expect.any(String),
          name: expect.any(String),
          site: expect.any(String),
          type: expect.any(String),
          official: expect.any(Boolean),
          publishedAt: expect.any(String),
        });
      }
    });
  });

  describe('similarMovies query', () => {
    const similarMoviesQuery = `
      query SimilarMovies($tmdbId: Int!, $page: Int) {
        similarMovies(tmdbId: $tmdbId, page: $page) {
          movies {
            tmdbId
            title
            overview
            posterPath
            backdropPath
            voteAverage
          }
          page
          totalPages
          totalResults
        }
      }
    `;

    it('should return similar movies', async () => {
      mockPrisma.movie.findUnique.mockResolvedValue(null);

      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: similarMoviesQuery,
          variables: { tmdbId: 550, page: 1 },
        })
        .expect(200);

      expect(response.body.data.similarMovies).toMatchObject({
        movies: expect.any(Array),
        page: expect.any(Number),
        totalPages: expect.any(Number),
        totalResults: expect.any(Number),
      });

      if (response.body.data.similarMovies.movies.length > 0) {
        expect(response.body.data.similarMovies.movies[0]).toMatchObject({
          tmdbId: expect.any(Number),
          title: expect.any(String),
          overview: expect.any(String),
          voteAverage: expect.any(Number),
        });
      }
    });
  });

  describe('movieRecommendations query', () => {
    const movieRecommendationsQuery = `
      query MovieRecommendations($tmdbId: Int!, $page: Int) {
        movieRecommendations(tmdbId: $tmdbId, page: $page) {
          movies {
            tmdbId
            title
            overview
            posterPath
            backdropPath
            voteAverage
          }
          page
          totalPages
          totalResults
        }
      }
    `;

    it('should return movie recommendations', async () => {
      mockPrisma.movie.findUnique.mockResolvedValue(null);

      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: movieRecommendationsQuery,
          variables: { tmdbId: 550, page: 1 },
        })
        .expect(200);

      expect(response.body.data.movieRecommendations).toMatchObject({
        movies: expect.any(Array),
        page: expect.any(Number),
        totalPages: expect.any(Number),
        totalResults: expect.any(Number),
      });

      if (response.body.data.movieRecommendations.movies.length > 0) {
        expect(response.body.data.movieRecommendations.movies[0]).toMatchObject(
          {
            tmdbId: expect.any(Number),
            title: expect.any(String),
            overview: expect.any(String),
            voteAverage: expect.any(Number),
          }
        );
      }
    });
  });

  describe('error handling', () => {
    it('should handle invalid TMDb ID gracefully', async () => {
      // Only test error handling if using real API
      if (USE_REAL_TMDB_API) {
        const response = await request(app.getHttpServer())
          .post('/graphql')
          .send({
            query: `
              query MovieDetails($tmdbId: Int!) {
                movieDetails(tmdbId: $tmdbId) {
                  id
                  title
                }
              }
            `,
            variables: { tmdbId: 999999999 },
          });

        // Should return GraphQL errors for invalid movie ID
        expect(response.body.errors).toBeDefined();
        expect(response.body.errors[0]).toMatchObject({
          message: expect.stringContaining('Failed to get movie details'),
        });
      } else {
        // With mocked service, configure it to throw error for this test
        jest
          .spyOn(tmdbService, 'getMovieDetails')
          .mockRejectedValueOnce(new Error('Movie not found'));

        const response = await request(app.getHttpServer())
          .post('/graphql')
          .send({
            query: `
              query MovieDetails($tmdbId: Int!) {
                movieDetails(tmdbId: $tmdbId) {
                  id
                  title
                }
              }
            `,
            variables: { tmdbId: 999999999 },
          });

        expect(response.body.errors).toBeDefined();
        expect(response.body.errors[0]).toMatchObject({
          message: expect.stringContaining('Failed to get movie details'),
        });
      }
    });

    it('should provide helpful error messages', async () => {
      // Test with missing required field
      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: `
            query MovieDetails {
              movieDetails {
                id
                title
              }
            }
          `,
        });

      expect(response.body.errors).toBeDefined();
      expect(response.body.errors[0]).toMatchObject({
        message: expect.stringContaining('tmdbId'),
      });
    });
  });
});
