import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional, IsEnum, Length } from 'class-validator';
import { MovieListType, PrivacyLevel } from '@movie-vibes/database';

@InputType()
export class CreateMovieListInput {
  @Field()
  @IsString()
  @Length(1, 255)
  name: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @Length(0, 1000)
  description?: string;

  @Field(() => MovieListType)
  @IsEnum(MovieListType)
  type: MovieListType;

  @Field(() => PrivacyLevel, { defaultValue: PrivacyLevel.PUBLIC })
  @IsEnum(PrivacyLevel)
  privacy: PrivacyLevel = PrivacyLevel.PUBLIC;
}
