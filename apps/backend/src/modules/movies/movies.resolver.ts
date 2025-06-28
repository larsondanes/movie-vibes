import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { MoviesService } from './movies.service';
import {
  Movie,
  MovieDetails,
  MovieSearchResult,
  MovieCredits,
  MovieVideos,
} from './entities/movie.entity';
import { SearchMoviesInput } from './dto/search-movies.input';

@Resolver(() => Movie)
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Query(() => MovieSearchResult, { name: 'searchMovies' })
  searchMovies(@Args('searchInput') searchInput: SearchMoviesInput) {
    return this.moviesService.searchMovies(searchInput);
  }

  @Query(() => MovieSearchResult, { name: 'popularMovies' })
  getPopularMovies(
    @Args('page', { type: () => Int, nullable: true, defaultValue: 1 })
    page: number
  ) {
    return this.moviesService.getPopularMovies(page);
  }

  @Query(() => MovieSearchResult, { name: 'nowPlayingMovies' })
  getNowPlayingMovies(
    @Args('page', { type: () => Int, nullable: true, defaultValue: 1 })
    page: number
  ) {
    return this.moviesService.getNowPlayingMovies(page);
  }

  @Query(() => MovieSearchResult, { name: 'topRatedMovies' })
  getTopRatedMovies(
    @Args('page', { type: () => Int, nullable: true, defaultValue: 1 })
    page: number
  ) {
    return this.moviesService.getTopRatedMovies(page);
  }

  @Query(() => Movie, { name: 'movie' })
  getMovieById(@Args('id') id: string) {
    return this.moviesService.getMovieById(id);
  }

  @Query(() => Movie, { name: 'movieByTmdbId' })
  getMovieByTmdbId(@Args('tmdbId', { type: () => Int }) tmdbId: number) {
    return this.moviesService.getMovieByTmdbId(tmdbId);
  }

  @Query(() => MovieDetails, { name: 'movieDetails' })
  getMovieDetails(@Args('tmdbId', { type: () => Int }) tmdbId: number) {
    return this.moviesService.getMovieDetails(tmdbId);
  }

  @Query(() => MovieCredits, { name: 'movieCredits' })
  getMovieCredits(@Args('tmdbId', { type: () => Int }) tmdbId: number) {
    return this.moviesService.getMovieCredits(tmdbId);
  }

  @Query(() => MovieVideos, { name: 'movieVideos' })
  getMovieVideos(@Args('tmdbId', { type: () => Int }) tmdbId: number) {
    return this.moviesService.getMovieVideos(tmdbId);
  }

  @Query(() => MovieSearchResult, { name: 'similarMovies' })
  getSimilarMovies(
    @Args('tmdbId', { type: () => Int }) tmdbId: number,
    @Args('page', { type: () => Int, nullable: true, defaultValue: 1 })
    page: number
  ) {
    return this.moviesService.getSimilarMovies(tmdbId, page);
  }

  @Query(() => MovieSearchResult, { name: 'movieRecommendations' })
  getMovieRecommendations(
    @Args('tmdbId', { type: () => Int }) tmdbId: number,
    @Args('page', { type: () => Int, nullable: true, defaultValue: 1 })
    page: number
  ) {
    return this.moviesService.getMovieRecommendations(tmdbId, page);
  }
}
