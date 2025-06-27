import { ObjectType, Field, ID, Float, Int } from '@nestjs/graphql';

@ObjectType()
export class Movie {
  @Field(() => ID)
  id: string;

  @Field(() => Int)
  tmdbId: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  overview?: string;

  @Field({ nullable: true })
  releaseDate?: Date;

  @Field(() => Int, { nullable: true })
  runtime?: number;

  @Field({ nullable: true })
  posterPath?: string;

  @Field({ nullable: true })
  backdropPath?: string;

  @Field(() => Float, { nullable: true })
  voteAverage?: number;

  @Field(() => [String])
  genres: string[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  // Helper methods for image URLs
  @Field({ nullable: true })
  posterUrl?: string;

  @Field({ nullable: true })
  backdropUrl?: string;
}

@ObjectType()
export class MovieSearchResult {
  @Field(() => [Movie])
  movies: Movie[];

  @Field(() => Int)
  page: number;

  @Field(() => Int)
  totalPages: number;

  @Field(() => Int)
  totalResults: number;
}
