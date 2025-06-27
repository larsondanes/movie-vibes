import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@movie-vibes/database';
import { TMDbService, TMDbMovie, TMDbMovieDetails } from '../tmdb/tmdb.service';
import { Movie, MovieSearchResult } from './entities/movie.entity';
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
