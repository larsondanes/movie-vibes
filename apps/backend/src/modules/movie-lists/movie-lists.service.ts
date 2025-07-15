import {
  Injectable,
  Logger,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaClient } from '@movie-vibes/database';
import { MovieList, MovieListItem } from './entities/movie-list.entity';
import { CreateMovieListInput } from './dto/create-movie-list.input';
import { UpdateMovieListInput } from './dto/update-movie-list.input';
import { AddMovieToListInput } from './dto/add-movie-to-list.input';

@Injectable()
export class MovieListsService {
  private readonly logger = new Logger(MovieListsService.name);

  constructor(private readonly prisma: PrismaClient) {}

  async createMovieList(
    userId: string,
    createMovieListInput: CreateMovieListInput
  ): Promise<MovieList> {
    try {
      const movieList = await this.prisma.movieList.create({
        data: {
          ...createMovieListInput,
          userId,
        },
        include: {
          user: true,
          items: {
            include: {
              movie: true,
            },
          },
        },
      });

      return {
        ...movieList,
        itemCount: movieList.items.length,
      };
    } catch (error) {
      this.logger.error(
        `Failed to create movie list: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error
      );
      throw new BadRequestException('Failed to create movie list');
    }
  }

  async getMovieListById(id: string, userId?: string): Promise<MovieList> {
    const movieList = await this.prisma.movieList.findUnique({
      where: { id },
      include: {
        user: true,
        items: {
          include: {
            movie: true,
          },
          orderBy: {
            addedAt: 'desc',
          },
        },
      },
    });

    if (!movieList) {
      throw new NotFoundException('Movie list not found');
    }

    // Check privacy permissions
    if (movieList.privacy === 'PRIVATE' && movieList.userId !== userId) {
      throw new ForbiddenException(
        'You do not have access to this private list'
      );
    }

    if (movieList.privacy === 'FRIENDS' && movieList.userId !== userId) {
      // TODO: Check if users are friends when friend system is implemented
      throw new ForbiddenException(
        'You do not have access to this friends-only list'
      );
    }

    return {
      ...movieList,
      itemCount: movieList.items.length,
    };
  }

  async getMovieListsByUserId(
    userId: string,
    viewerId?: string
  ): Promise<MovieList[]> {
    const whereClause: any = { userId };

    // If viewing someone else's lists, filter by privacy
    if (viewerId !== userId) {
      whereClause.privacy = {
        in: ['PUBLIC'], // Only show public lists for now
        // TODO: Add 'FRIENDS' when friend system is implemented
      };
    }

    const movieLists = await this.prisma.movieList.findMany({
      where: whereClause,
      include: {
        user: true,
        items: {
          include: {
            movie: true,
          },
          orderBy: {
            addedAt: 'desc',
          },
        },
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });

    return movieLists.map(list => ({
      ...list,
      itemCount: list.items.length,
    }));
  }

  async updateMovieList(
    updateMovieListInput: UpdateMovieListInput,
    userId: string
  ): Promise<MovieList> {
    const { id, ...updateData } = updateMovieListInput;

    // Check if list exists and user owns it
    const existingList = await this.prisma.movieList.findUnique({
      where: { id },
    });

    if (!existingList) {
      throw new NotFoundException('Movie list not found');
    }

    if (existingList.userId !== userId) {
      throw new ForbiddenException('You can only update your own movie lists');
    }

    try {
      const updatedList = await this.prisma.movieList.update({
        where: { id },
        data: updateData,
        include: {
          user: true,
          items: {
            include: {
              movie: true,
            },
            orderBy: {
              addedAt: 'desc',
            },
          },
        },
      });

      return {
        ...updatedList,
        itemCount: updatedList.items.length,
      };
    } catch (error) {
      this.logger.error(
        `Failed to update movie list: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error
      );
      throw new BadRequestException('Failed to update movie list');
    }
  }

  async deleteMovieList(id: string, userId: string): Promise<boolean> {
    // Check if list exists and user owns it
    const existingList = await this.prisma.movieList.findUnique({
      where: { id },
    });

    if (!existingList) {
      throw new NotFoundException('Movie list not found');
    }

    if (existingList.userId !== userId) {
      throw new ForbiddenException('You can only delete your own movie lists');
    }

    try {
      await this.prisma.movieList.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      this.logger.error(
        `Failed to delete movie list: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error
      );
      throw new BadRequestException('Failed to delete movie list');
    }
  }

  async addMovieToList(
    addMovieInput: AddMovieToListInput,
    userId: string
  ): Promise<MovieListItem> {
    const { movieListId, movieId, watchedAt, ...itemData } = addMovieInput;

    // Check if list exists and user owns it
    const movieList = await this.prisma.movieList.findUnique({
      where: { id: movieListId },
    });

    if (!movieList) {
      throw new NotFoundException('Movie list not found');
    }

    if (movieList.userId !== userId) {
      throw new ForbiddenException('You can only add movies to your own lists');
    }

    // Check if movie exists
    const movie = await this.prisma.movie.findUnique({
      where: { id: movieId },
    });

    if (!movie) {
      throw new NotFoundException('Movie not found');
    }

    // Check if movie is already in the list
    const existingItem = await this.prisma.movieListItem.findUnique({
      where: {
        movieListId_movieId: {
          movieListId,
          movieId,
        },
      },
    });

    if (existingItem) {
      throw new BadRequestException('Movie is already in this list');
    }

    try {
      const movieListItem = await this.prisma.movieListItem.create({
        data: {
          ...itemData,
          movieListId,
          movieId,
          watchedAt: watchedAt ? new Date(watchedAt) : undefined,
        },
        include: {
          movie: true,
        },
      });

      return movieListItem;
    } catch (error) {
      this.logger.error(
        `Failed to add movie to list: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error
      );
      throw new BadRequestException('Failed to add movie to list');
    }
  }

  async removeMovieFromList(
    movieListId: string,
    movieId: string,
    userId: string
  ): Promise<boolean> {
    // Check if list exists and user owns it
    const movieList = await this.prisma.movieList.findUnique({
      where: { id: movieListId },
    });

    if (!movieList) {
      throw new NotFoundException('Movie list not found');
    }

    if (movieList.userId !== userId) {
      throw new ForbiddenException(
        'You can only remove movies from your own lists'
      );
    }

    // Check if movie is in the list
    const existingItem = await this.prisma.movieListItem.findUnique({
      where: {
        movieListId_movieId: {
          movieListId,
          movieId,
        },
      },
    });

    if (!existingItem) {
      throw new NotFoundException('Movie is not in this list');
    }

    try {
      await this.prisma.movieListItem.delete({
        where: {
          movieListId_movieId: {
            movieListId,
            movieId,
          },
        },
      });
      return true;
    } catch (error) {
      this.logger.error(
        `Failed to remove movie from list: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error
      );
      throw new BadRequestException('Failed to remove movie from list');
    }
  }
}
