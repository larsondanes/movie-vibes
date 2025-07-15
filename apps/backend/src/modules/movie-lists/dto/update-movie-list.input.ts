import { InputType, Field, ID } from '@nestjs/graphql';
import { IsString, IsOptional, IsEnum, Length, IsUUID } from 'class-validator';
import { MovieListType, PrivacyLevel } from '@movie-vibes/database';

@InputType()
export class UpdateMovieListInput {
  @Field(() => ID)
  @IsUUID()
  id: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @Length(1, 255)
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @Length(0, 1000)
  description?: string;

  @Field(() => MovieListType, { nullable: true })
  @IsOptional()
  @IsEnum(MovieListType)
  type?: MovieListType;

  @Field(() => PrivacyLevel, { nullable: true })
  @IsOptional()
  @IsEnum(PrivacyLevel)
  privacy?: PrivacyLevel;
}
