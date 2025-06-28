import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@movie-vibes/database';
import {
  TMDbService,
  TMDbMovie,
  TMDbMovieDetails,
  TMDbCredits,
  TMDbVideosResponse,
} from '../tmdb/tmdb.service';
import {
  Movie,
  MovieDetails,
  MovieSearchResult,
  MovieCredits,
  MovieVideos,
} from './entities/movie.entity';
import { SearchMoviesInput } from './dto/search-movies.input';

@Injectable()
export class MoviesService {
  private readonly logger = new Logger(MoviesService.name);

  constructor(
    private readonly prisma: PrismaClient,
    private readonly tmdbService: TMDbService
  ) {}

  async searchMovies(
    searchInput: SearchMoviesInput
  ): Promise<MovieSearchResult> {
    try {
      const { query, page = 1 } = searchInput;

      // Search TMDb API
      const tmdbResult = await this.tmdbService.searchMovies(query, page);

      // Convert TMDb movies to our Movie entities
      const movies = await Promise.all(
        tmdbResult.results.map(tmdbMovie => this.convertTMDbToMovie(tmdbMovie))
      );

      return {
        movies,
        page: tmdbResult.page,
        totalPages: tmdbResult.total_pages,
        totalResults: tmdbResult.total_results,
      };
    } catch (error) {
      this.logger.error(
        `Failed to search movies: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error.stack : undefined
      );
      throw new Error('Failed to search movies');
    }
  }

  async getPopularMovies(page = 1): Promise<MovieSearchResult> {
    try {
      const tmdbResult = await this.tmdbService.getPopularMovies(page);

      const movies = await Promise.all(
        tmdbResult.results.map(tmdbMovie => this.convertTMDbToMovie(tmdbMovie))
      );

      return {
        movies,
        page: tmdbResult.page,
        totalPages: tmdbResult.total_pages,
        totalResults: tmdbResult.total_results,
      };
    } catch (error) {
      this.logger.error(
        `Failed to get popular movies: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error.stack : undefined
      );
      throw new Error('Failed to get popular movies');
    }
  }

  async getNowPlayingMovies(page = 1): Promise<MovieSearchResult> {
    try {
      const tmdbResult = await this.tmdbService.getNowPlayingMovies(page);

      const movies = await Promise.all(
        tmdbResult.results.map(tmdbMovie => this.convertTMDbToMovie(tmdbMovie))
      );

      return {
        movies,
        page: tmdbResult.page,
        totalPages: tmdbResult.total_pages,
        totalResults: tmdbResult.total_results,
      };
    } catch (error) {
      this.logger.error(
        `Failed to get now playing movies: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error.stack : undefined
      );
      throw new Error('Failed to get now playing movies');
    }
  }

  async getTopRatedMovies(page = 1): Promise<MovieSearchResult> {
    try {
      const tmdbResult = await this.tmdbService.getTopRatedMovies(page);

      const movies = await Promise.all(
        tmdbResult.results.map(tmdbMovie => this.convertTMDbToMovie(tmdbMovie))
      );

      return {
        movies,
        page: tmdbResult.page,
        totalPages: tmdbResult.total_pages,
        totalResults: tmdbResult.total_results,
      };
    } catch (error) {
      this.logger.error(
        `Failed to get top rated movies: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error.stack : undefined
      );
      throw new Error('Failed to get top rated movies');
    }
  }

  async getMovieById(id: string): Promise<Movie> {
    try {
      const movie = await this.prisma.movie.findUnique({
        where: { id },
      });

      if (!movie) {
        throw new NotFoundException('Movie not found');
      }

      return this.convertPrismaToMovie(movie);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      this.logger.error(
        `Failed to get movie by ID: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error.stack : undefined
      );
      throw new Error('Failed to get movie');
    }
  }

  async getMovieByTmdbId(tmdbId: number): Promise<Movie> {
    try {
      // First check if we have it in our database
      let movie = await this.prisma.movie.findUnique({
        where: { tmdbId },
      });

      if (!movie) {
        // If not in database, fetch from TMDb and save
        const tmdbDetails = await this.tmdbService.getMovieDetails(tmdbId);
        movie = await this.saveMovieFromTMDb(tmdbDetails);
      }

      return this.convertPrismaToMovie(movie);
    } catch (error) {
      this.logger.error(
        `Failed to get movie by TMDb ID: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error.stack : undefined
      );
      throw new Error('Failed to get movie');
    }
  }

  async getMovieDetails(tmdbId: number): Promise<MovieDetails> {
    try {
      // Get detailed movie information from TMDb
      const tmdbDetails = await this.tmdbService.getMovieDetails(tmdbId);

      // Check if we have it in our database, if not save it
      let movie = await this.prisma.movie.findUnique({
        where: { tmdbId },
      });

      if (!movie) {
        movie = await this.saveMovieFromTMDb(tmdbDetails);
      }

      return this.convertTMDbDetailsToMovieDetails(tmdbDetails, movie.id);
    } catch (error) {
      this.logger.error(
        `Failed to get movie details: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error.stack : undefined
      );
      throw new Error('Failed to get movie details');
    }
  }

  async getMovieCredits(tmdbId: number): Promise<MovieCredits> {
    try {
      const tmdbCredits = await this.tmdbService.getMovieCredits(tmdbId);
      return this.convertTMDbCreditsToMovieCredits(tmdbCredits);
    } catch (error) {
      this.logger.error(
        `Failed to get movie credits: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error.stack : undefined
      );
      throw new Error('Failed to get movie credits');
    }
  }

  async getMovieVideos(tmdbId: number): Promise<MovieVideos> {
    try {
      const tmdbVideos = await this.tmdbService.getMovieVideos(tmdbId);
      return this.convertTMDbVideosToMovieVideos(tmdbVideos);
    } catch (error) {
      this.logger.error(
        `Failed to get movie videos: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error.stack : undefined
      );
      throw new Error('Failed to get movie videos');
    }
  }

  async getSimilarMovies(tmdbId: number, page = 1): Promise<MovieSearchResult> {
    try {
      const tmdbResult = await this.tmdbService.getSimilarMovies(tmdbId, page);

      const movies = await Promise.all(
        tmdbResult.results.map(tmdbMovie => this.convertTMDbToMovie(tmdbMovie))
      );

      return {
        movies,
        page: tmdbResult.page,
        totalPages: tmdbResult.total_pages,
        totalResults: tmdbResult.total_results,
      };
    } catch (error) {
      this.logger.error(
        `Failed to get similar movies: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error.stack : undefined
      );
      throw new Error('Failed to get similar movies');
    }
  }

  async getMovieRecommendations(
    tmdbId: number,
    page = 1
  ): Promise<MovieSearchResult> {
    try {
      const tmdbResult = await this.tmdbService.getMovieRecommendations(
        tmdbId,
        page
      );

      const movies = await Promise.all(
        tmdbResult.results.map(tmdbMovie => this.convertTMDbToMovie(tmdbMovie))
      );

      return {
        movies,
        page: tmdbResult.page,
        totalPages: tmdbResult.total_pages,
        totalResults: tmdbResult.total_results,
      };
    } catch (error) {
      this.logger.error(
        `Failed to get movie recommendations: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error.stack : undefined
      );
      throw new Error('Failed to get movie recommendations');
    }
  }

  private async convertTMDbToMovie(tmdbMovie: TMDbMovie): Promise<Movie> {
    // Try to get from database first, if not found, create a temporary Movie object
    let movie = await this.prisma.movie.findUnique({
      where: { tmdbId: tmdbMovie.id },
    });

    if (!movie) {
      // Create temporary movie object for search results
      // We don't save every search result to DB, only when specifically requested
      return {
        id: `tmdb-${tmdbMovie.id}`, // Temporary ID
        tmdbId: tmdbMovie.id,
        title: tmdbMovie.title,
        overview: tmdbMovie.overview,
        releaseDate: tmdbMovie.release_date
          ? new Date(tmdbMovie.release_date)
          : undefined,
        runtime: null,
        posterPath: tmdbMovie.poster_path,
        backdropPath: tmdbMovie.backdrop_path,
        voteAverage: tmdbMovie.vote_average,
        genres: [], // Will be empty for search results, filled when getting details
        createdAt: new Date(),
        updatedAt: new Date(),
        posterUrl: this.tmdbService.getImageUrl(tmdbMovie.poster_path),
        backdropUrl: this.tmdbService.getImageUrl(
          tmdbMovie.backdrop_path,
          'w1280'
        ),
      };
    }

    return this.convertPrismaToMovie(movie);
  }

  private convertPrismaToMovie(prismaMovie: any): Movie {
    return {
      id: prismaMovie.id,
      tmdbId: prismaMovie.tmdbId,
      title: prismaMovie.title,
      overview: prismaMovie.overview,
      releaseDate: prismaMovie.releaseDate,
      runtime: prismaMovie.runtime,
      posterPath: prismaMovie.posterPath,
      backdropPath: prismaMovie.backdropPath,
      voteAverage: prismaMovie.voteAverage,
      genres: prismaMovie.genres,
      createdAt: prismaMovie.createdAt,
      updatedAt: prismaMovie.updatedAt,
      posterUrl: this.tmdbService.getImageUrl(prismaMovie.posterPath),
      backdropUrl: this.tmdbService.getImageUrl(
        prismaMovie.backdropPath,
        'w1280'
      ),
    };
  }

  private convertTMDbDetailsToMovieDetails(
    tmdbDetails: TMDbMovieDetails,
    movieId: string
  ): MovieDetails {
    return {
      id: movieId,
      tmdbId: tmdbDetails.id,
      title: tmdbDetails.title,
      overview: tmdbDetails.overview,
      releaseDate: tmdbDetails.release_date
        ? new Date(tmdbDetails.release_date)
        : undefined,
      runtime: tmdbDetails.runtime,
      posterPath: tmdbDetails.poster_path,
      backdropPath: tmdbDetails.backdrop_path,
      voteAverage: tmdbDetails.vote_average,
      genres: tmdbDetails.genres.map(genre => genre.name),
      createdAt: new Date(),
      updatedAt: new Date(),
      posterUrl: this.tmdbService.getImageUrl(tmdbDetails.poster_path),
      backdropUrl: this.tmdbService.getImageUrl(
        tmdbDetails.backdrop_path,
        'w1280'
      ),
      // Enhanced details
      budget: tmdbDetails.budget || undefined,
      revenue: tmdbDetails.revenue || undefined,
      homepage: tmdbDetails.homepage,
      imdbId: tmdbDetails.imdb_id,
      originalLanguage: tmdbDetails.original_language,
      originalTitle: tmdbDetails.original_title,
      popularity: tmdbDetails.popularity,
      status: tmdbDetails.status,
      tagline: tmdbDetails.tagline,
      belongsToCollection: tmdbDetails.belongs_to_collection
        ? {
            id: tmdbDetails.belongs_to_collection.id,
            name: tmdbDetails.belongs_to_collection.name,
            posterPath: tmdbDetails.belongs_to_collection.poster_path,
            backdropPath: tmdbDetails.belongs_to_collection.backdrop_path,
            posterUrl: this.tmdbService.getImageUrl(
              tmdbDetails.belongs_to_collection.poster_path
            ),
            backdropUrl: this.tmdbService.getImageUrl(
              tmdbDetails.belongs_to_collection.backdrop_path,
              'w1280'
            ),
          }
        : undefined,
      productionCompanies: tmdbDetails.production_companies.map(company => ({
        id: company.id,
        logoPath: company.logo_path,
        name: company.name,
        originCountry: company.origin_country,
        logoUrl: this.tmdbService.getImageUrl(company.logo_path, 'w200'),
      })),
      productionCountries: tmdbDetails.production_countries.map(country => ({
        iso31661: country.iso_3166_1,
        name: country.name,
      })),
      spokenLanguages: tmdbDetails.spoken_languages.map(language => ({
        englishName: language.english_name,
        iso6391: language.iso_639_1,
        name: language.name,
      })),
      voteCount: tmdbDetails.vote_count,
      adult: tmdbDetails.adult,
    };
  }

  private convertTMDbCreditsToMovieCredits(
    tmdbCredits: TMDbCredits
  ): MovieCredits {
    return {
      id: tmdbCredits.id,
      cast: tmdbCredits.cast.map(castMember => ({
        id: castMember.id,
        name: castMember.name,
        character: castMember.character,
        profilePath: castMember.profile_path,
        order: castMember.order,
        profileUrl: this.tmdbService.getImageUrl(
          castMember.profile_path,
          'w185'
        ),
      })),
      crew: tmdbCredits.crew.map(crewMember => ({
        id: crewMember.id,
        name: crewMember.name,
        job: crewMember.job,
        department: crewMember.department,
        profilePath: crewMember.profile_path,
        profileUrl: this.tmdbService.getImageUrl(
          crewMember.profile_path,
          'w185'
        ),
      })),
    };
  }

  private convertTMDbVideosToMovieVideos(
    tmdbVideos: TMDbVideosResponse
  ): MovieVideos {
    return {
      id: tmdbVideos.id,
      results: tmdbVideos.results.map(video => ({
        id: video.id,
        key: video.key,
        name: video.name,
        site: video.site,
        type: video.type,
        official: video.official,
        publishedAt: video.published_at,
      })),
    };
  }

  private async saveMovieFromTMDb(tmdbDetails: TMDbMovieDetails) {
    return await this.prisma.movie.create({
      data: {
        tmdbId: tmdbDetails.id,
        title: tmdbDetails.title,
        overview: tmdbDetails.overview,
        releaseDate: tmdbDetails.release_date
          ? new Date(tmdbDetails.release_date)
          : null,
        runtime: tmdbDetails.runtime,
        posterPath: tmdbDetails.poster_path,
        backdropPath: tmdbDetails.backdrop_path,
        voteAverage: tmdbDetails.vote_average,
        genres: tmdbDetails.genres.map(genre => genre.name),
      },
    });
  }
}
