import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesResolver } from './movies.resolver';
import { TMDbModule } from '../tmdb/tmdb.module';
import { PrismaModule } from '../../database/prisma.module';

@Module({
  imports: [TMDbModule, PrismaModule],
  providers: [MoviesResolver, MoviesService],
  exports: [MoviesService],
})
export class MoviesModule {}
