import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { join } from 'path';
import request from 'supertest';
import { PrismaClient } from '@movie-vibes/database';
import { TMDbModule } from '../../tmdb/tmdb.module';
import { MoviesModule } from '../movies.module';

/**
 * End-to-End tests that use the real TMDb API
 *
 * These tests are skipped by default to avoid API rate limits and external dependencies.
 * To run these tests, set environment variable: E2E_TESTS=true
 *
 * Example: E2E_TESTS=true yarn test movie-details.e2e.spec.ts
 */
describe('Movie Details E2E (Real TMDb API)', () => {
  let app: INestApplication;
  let _prisma: PrismaClient;

  const SKIP_E2E_TESTS = process.env.E2E_TESTS !== 'true';

  const mockPrisma = {
    movie: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
  };

  beforeAll(async () => {
    if (SKIP_E2E_TESTS) {
      return;
    }

    const moduleFixture: TestingModule = await Test.createTestingModule({
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
      .useValue(mockPrisma)
      .compile();

    app = moduleFixture.createNestApplication({
      logger: ['error'], // Only show errors in E2E tests
    });

    _prisma = moduleFixture.get<PrismaClient>(PrismaClient);
    await app.init();
  });

  afterAll(async () => {
    if (SKIP_E2E_TESTS) {
      return;
    }
    await app.close();
  });

  beforeEach(() => {
    if (SKIP_E2E_TESTS) {
      return;
    }
    jest.clearAllMocks();
  });

  // Test with a well-known movie that should always exist
  const FIGHT_CLUB_TMDB_ID = 550;

  describe('Real TMDb API Integration', () => {
    it('should fetch real movie details from TMDb', async () => {
      if (SKIP_E2E_TESTS) {
        console.log(
          'Skipping E2E test. Set E2E_TESTS=true to run real API tests.'
        );
        return;
      }

      const mockMovie = {
        id: 'db-movie-id',
        tmdbId: FIGHT_CLUB_TMDB_ID,
        title: 'Fight Club',
        overview: expect.any(String),
        releaseDate: new Date('1999-10-15'),
        runtime: 139,
        posterPath: expect.any(String),
        backdropPath: expect.any(String),
        voteAverage: expect.any(Number),
        genres: expect.any(Array),
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockPrisma.movie.findUnique.mockResolvedValue(null);
      mockPrisma.movie.create.mockResolvedValue(mockMovie);

      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: `
            query MovieDetails($tmdbId: Int!) {
              movieDetails(tmdbId: $tmdbId) {
                id
                tmdbId
                title
                overview
                runtime
                budget
                revenue
                homepage
                imdbId
                originalLanguage
                originalTitle
                status
                tagline
                genres
                productionCompanies {
                  id
                  name
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
          `,
          variables: { tmdbId: FIGHT_CLUB_TMDB_ID },
        })
        .expect(200);

      expect(response.body.data.movieDetails).toMatchObject({
        tmdbId: FIGHT_CLUB_TMDB_ID,
        title: 'Fight Club',
        runtime: expect.any(Number),
        budget: expect.any(Number),
        revenue: expect.any(Number),
        imdbId: expect.stringMatching(/^tt\d+$/),
        originalLanguage: 'en',
        status: 'Released',
        genres: expect.arrayContaining([expect.any(String)]),
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
    }, 10000); // Longer timeout for real API call

    it('should fetch real movie credits from TMDb', async () => {
      if (SKIP_E2E_TESTS) {
        console.log(
          'Skipping E2E test. Set E2E_TESTS=true to run real API tests.'
        );
        return;
      }

      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: `
            query MovieCredits($tmdbId: Int!) {
              movieCredits(tmdbId: $tmdbId) {
                id
                cast {
                  id
                  name
                  character
                  order
                }
                crew {
                  id
                  name
                  job
                  department
                }
              }
            }
          `,
          variables: { tmdbId: FIGHT_CLUB_TMDB_ID },
        })
        .expect(200);

      expect(response.body.data.movieCredits).toMatchObject({
        id: FIGHT_CLUB_TMDB_ID,
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

      // Should include known cast members
      const castNames = response.body.data.movieCredits.cast.map(
        (c: any) => c.name
      );
      expect(castNames).toEqual(
        expect.arrayContaining(['Brad Pitt', 'Edward Norton'])
      );
    }, 10000);

    it('should handle API rate limiting gracefully', async () => {
      if (SKIP_E2E_TESTS) {
        console.log(
          'Skipping E2E test. Set E2E_TESTS=true to run real API tests.'
        );
        return;
      }

      // Make multiple rapid requests to test rate limiting behavior
      const requests = Array.from({ length: 5 }, () =>
        request(app.getHttpServer())
          .post('/graphql')
          .send({
            query: `
              query MovieVideos($tmdbId: Int!) {
                movieVideos(tmdbId: $tmdbId) {
                  id
                  results {
                    id
                    name
                    type
                    site
                  }
                }
              }
            `,
            variables: { tmdbId: FIGHT_CLUB_TMDB_ID },
          })
      );

      const responses = await Promise.allSettled(requests);

      // At least one request should succeed
      const successfulResponses = responses.filter(
        r => r.status === 'fulfilled' && r.value.status === 200
      );

      expect(successfulResponses.length).toBeGreaterThan(0);
    }, 15000);
  });

  describe('Error Handling with Real API', () => {
    it('should handle non-existent movie ID', async () => {
      if (SKIP_E2E_TESTS) {
        console.log(
          'Skipping E2E test. Set E2E_TESTS=true to run real API tests.'
        );
        return;
      }

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
    }, 10000);
  });
});
