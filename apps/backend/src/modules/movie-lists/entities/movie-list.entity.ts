import { ObjectType, Field, ID, registerEnumType, Int } from '@nestjs/graphql';
import { Movie } from '../../movies/entities/movie.entity';
import { User } from '../../users/entities/user.entity';
import { MovieListType, PrivacyLevel } from '@movie-vibes/database';

registerEnumType(MovieListType, {
  name: 'MovieListType',
  description: 'The type of movie list',
});

registerEnumType(PrivacyLevel, {
  name: 'PrivacyLevel',
  description: 'The privacy level of the list',
});

@ObjectType()
export class MovieListItem {
  @Field(() => ID)
  id: string;

  @Field(() => ID)
  movieListId: string;

  @Field(() => ID)
  movieId: string;

  @Field({ nullable: true })
  notes?: string;

  @Field(() => Int, { nullable: true })
  rating?: number;

  @Field({ nullable: true })
  watchedAt?: Date;

  @Field()
  addedAt: Date;

  @Field(() => Movie)
  movie: Movie;
}

@ObjectType()
export class MovieList {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => MovieListType)
  type: MovieListType;

  @Field(() => PrivacyLevel)
  privacy: PrivacyLevel;

  @Field(() => ID)
  userId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => User)
  user: User;

  @Field(() => [MovieListItem])
  items: MovieListItem[];

  @Field(() => Int)
  itemCount: number;
}
