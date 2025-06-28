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
export class ProductionCompany {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  logoPath?: string;

  @Field()
  name: string;

  @Field()
  originCountry: string;

  @Field({ nullable: true })
  logoUrl?: string;
}

@ObjectType()
export class ProductionCountry {
  @Field()
  iso31661: string;

  @Field()
  name: string;
}

@ObjectType()
export class SpokenLanguage {
  @Field()
  englishName: string;

  @Field()
  iso6391: string;

  @Field()
  name: string;
}

@ObjectType()
export class MovieCollection {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  posterPath?: string;

  @Field({ nullable: true })
  backdropPath?: string;

  @Field({ nullable: true })
  posterUrl?: string;

  @Field({ nullable: true })
  backdropUrl?: string;
}

@ObjectType()
export class MovieDetails {
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

  @Field({ nullable: true })
  posterUrl?: string;

  @Field({ nullable: true })
  backdropUrl?: string;

  // Enhanced details from TMDb
  @Field(() => Int, { nullable: true })
  budget?: number;

  @Field(() => Int, { nullable: true })
  revenue?: number;

  @Field({ nullable: true })
  homepage?: string;

  @Field({ nullable: true })
  imdbId?: string;

  @Field({ nullable: true })
  originalLanguage?: string;

  @Field({ nullable: true })
  originalTitle?: string;

  @Field(() => Float, { nullable: true })
  popularity?: number;

  @Field({ nullable: true })
  status?: string;

  @Field({ nullable: true })
  tagline?: string;

  @Field(() => MovieCollection, { nullable: true })
  belongsToCollection?: MovieCollection;

  @Field(() => [ProductionCompany])
  productionCompanies: ProductionCompany[];

  @Field(() => [ProductionCountry])
  productionCountries: ProductionCountry[];

  @Field(() => [SpokenLanguage])
  spokenLanguages: SpokenLanguage[];

  @Field(() => Int, { nullable: true })
  voteCount?: number;

  @Field(() => Boolean, { nullable: true })
  adult?: boolean;
}

@ObjectType()
export class CastMember {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  character: string;

  @Field({ nullable: true })
  profilePath?: string;

  @Field(() => Int)
  order: number;

  @Field({ nullable: true })
  profileUrl?: string;
}

@ObjectType()
export class CrewMember {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  job: string;

  @Field()
  department: string;

  @Field({ nullable: true })
  profilePath?: string;

  @Field({ nullable: true })
  profileUrl?: string;
}

@ObjectType()
export class MovieCredits {
  @Field(() => Int)
  id: number;

  @Field(() => [CastMember])
  cast: CastMember[];

  @Field(() => [CrewMember])
  crew: CrewMember[];
}

@ObjectType()
export class MovieVideo {
  @Field()
  id: string;

  @Field()
  key: string;

  @Field()
  name: string;

  @Field()
  site: string;

  @Field()
  type: string;

  @Field()
  official: boolean;

  @Field()
  publishedAt: string;
}

@ObjectType()
export class MovieVideos {
  @Field(() => Int)
  id: number;

  @Field(() => [MovieVideo])
  results: MovieVideo[];
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
