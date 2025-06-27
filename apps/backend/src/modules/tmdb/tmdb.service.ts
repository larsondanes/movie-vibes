import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

export interface TMDbMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  popularity: number;
  adult: boolean;
  video: boolean;
}

export interface TMDbSearchResponse {
  page: number;
  results: TMDbMovie[];
  total_pages: number;
  total_results: number;
}

export interface TMDbMovieDetails extends TMDbMovie {
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  } | null;
  budget: number;
  genres: Array<{
    id: number;
    name: string;
  }>;
  homepage: string | null;
  imdb_id: string | null;
  production_companies: Array<{
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }>;
  production_countries: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  revenue: number;
  runtime: number | null;
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  status: string;
  tagline: string | null;
}

@Injectable()
export class TMDbService {
  private readonly logger = new Logger(TMDbService.name);
  private readonly baseUrl = 'https://api.themoviedb.org/3';
  private readonly apiKey: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {
    this.apiKey = this.configService.get<string>('TMDB_API_KEY');
    if (!this.apiKey) {
      this.logger.warn(
        'TMDB_API_KEY not configured. Movie features will not work.'
      );
    }
  }

  async searchMovies(query: string, page = 1): Promise<TMDbSearchResponse> {
    try {
      const url = `${this.baseUrl}/search/movie`;
      const params = {
        api_key: this.apiKey,
        query,
        page,
        include_adult: false,
      };

      const response = await firstValueFrom(
        this.httpService.get<TMDbSearchResponse>(url, {
          params,
        })
      );

      return response.data;
    } catch (error) {
      this.logger.error(
        `Failed to search movies: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error.stack : undefined
      );
      throw new Error('Failed to search movies');
    }
  }

  async getMovieDetails(movieId: number): Promise<TMDbMovieDetails> {
    try {
      const url = `${this.baseUrl}/movie/${movieId}`;
      const response = await firstValueFrom(
        this.httpService.get<TMDbMovieDetails>(url, {
          params: {
            api_key: this.apiKey,
          },
        })
      );

      return response.data;
    } catch (error) {
      this.logger.error(
        `Failed to get movie details for ID ${movieId}: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error.stack : undefined
      );
      throw new Error('Failed to get movie details');
    }
  }

  async getPopularMovies(page = 1): Promise<TMDbSearchResponse> {
    try {
      const url = `${this.baseUrl}/movie/popular`;
      const response = await firstValueFrom(
        this.httpService.get<TMDbSearchResponse>(url, {
          params: {
            api_key: this.apiKey,
            page,
          },
        })
      );

      return response.data;
    } catch (error) {
      this.logger.error(
        `Failed to get popular movies: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error.stack : undefined
      );
      throw new Error('Failed to get popular movies');
    }
  }

  async getNowPlayingMovies(page = 1): Promise<TMDbSearchResponse> {
    try {
      const url = `${this.baseUrl}/movie/now_playing`;
      const response = await firstValueFrom(
        this.httpService.get<TMDbSearchResponse>(url, {
          params: {
            api_key: this.apiKey,
            page,
          },
        })
      );

      return response.data;
    } catch (error) {
      this.logger.error(
        `Failed to get now playing movies: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error.stack : undefined
      );
      throw new Error('Failed to get now playing movies');
    }
  }

  async getTopRatedMovies(page = 1): Promise<TMDbSearchResponse> {
    try {
      const url = `${this.baseUrl}/movie/top_rated`;
      const response = await firstValueFrom(
        this.httpService.get<TMDbSearchResponse>(url, {
          params: {
            api_key: this.apiKey,
            page,
          },
        })
      );

      return response.data;
    } catch (error) {
      this.logger.error(
        `Failed to get top rated movies: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error.stack : undefined
      );
      throw new Error('Failed to get top rated movies');
    }
  }

  getImageUrl(path: string | null, size = 'w500'): string | null {
    if (!path) return null;
    return `https://image.tmdb.org/t/p/${size}${path}`;
  }
}
