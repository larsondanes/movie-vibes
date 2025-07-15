import { Module } from '@nestjs/common';
import { MovieListsService } from './movie-lists.service';
import { MovieListsResolver } from './movie-lists.resolver';
import { PrismaClient } from '@movie-vibes/database';

@Module({
  providers: [MovieListsResolver, MovieListsService, PrismaClient],
  exports: [MovieListsService],
})
export class MovieListsModule {}
