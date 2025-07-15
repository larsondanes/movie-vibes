import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { MovieListsService } from './movie-lists.service';
import { MovieList, MovieListItem } from './entities/movie-list.entity';
import { CreateMovieListInput } from './dto/create-movie-list.input';
import { UpdateMovieListInput } from './dto/update-movie-list.input';
import { AddMovieToListInput } from './dto/add-movie-to-list.input';

@Resolver(() => MovieList)
export class MovieListsResolver {
  constructor(private readonly movieListsService: MovieListsService) {}

  @Mutation(() => MovieList)
  @UseGuards(JwtAuthGuard)
  createMovieList(
    @Args('createMovieListInput') createMovieListInput: CreateMovieListInput,
    @CurrentUser('sub') userId: string
  ): Promise<MovieList> {
    return this.movieListsService.createMovieList(userId, createMovieListInput);
  }

  @Query(() => MovieList, { name: 'movieList' })
  getMovieList(
    @Args('id', { type: () => ID }) id: string,
    @CurrentUser('sub', { nullable: true }) userId?: string
  ): Promise<MovieList> {
    return this.movieListsService.getMovieListById(id, userId);
  }

  @Query(() => [MovieList], { name: 'movieLists' })
  getMovieLists(
    @Args('userId', { type: () => ID }) userId: string,
    @CurrentUser('sub', { nullable: true }) viewerId?: string
  ): Promise<MovieList[]> {
    return this.movieListsService.getMovieListsByUserId(userId, viewerId);
  }

  @Query(() => [MovieList], { name: 'myMovieLists' })
  @UseGuards(JwtAuthGuard)
  getMyMovieLists(@CurrentUser('sub') userId: string): Promise<MovieList[]> {
    return this.movieListsService.getMovieListsByUserId(userId, userId);
  }

  @Mutation(() => MovieList)
  @UseGuards(JwtAuthGuard)
  updateMovieList(
    @Args('updateMovieListInput') updateMovieListInput: UpdateMovieListInput,
    @CurrentUser('sub') userId: string
  ): Promise<MovieList> {
    return this.movieListsService.updateMovieList(updateMovieListInput, userId);
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  deleteMovieList(
    @Args('id', { type: () => ID }) id: string,
    @CurrentUser('sub') userId: string
  ): Promise<boolean> {
    return this.movieListsService.deleteMovieList(id, userId);
  }

  @Mutation(() => MovieListItem)
  @UseGuards(JwtAuthGuard)
  addMovieToList(
    @Args('addMovieToListInput') addMovieToListInput: AddMovieToListInput,
    @CurrentUser('sub') userId: string
  ): Promise<MovieListItem> {
    return this.movieListsService.addMovieToList(addMovieToListInput, userId);
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  removeMovieFromList(
    @Args('movieListId', { type: () => ID }) movieListId: string,
    @Args('movieId', { type: () => ID }) movieId: string,
    @CurrentUser('sub') userId: string
  ): Promise<boolean> {
    return this.movieListsService.removeMovieFromList(
      movieListId,
      movieId,
      userId
    );
  }
}
