import { InputType, Field, ID, Int } from '@nestjs/graphql';
import {
  IsUUID,
  IsOptional,
  IsString,
  IsInt,
  Min,
  Max,
  IsDateString,
} from 'class-validator';

@InputType()
export class AddMovieToListInput {
  @Field(() => ID)
  @IsUUID()
  movieListId: string;

  @Field(() => ID)
  @IsUUID()
  movieId: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  notes?: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5)
  rating?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsDateString()
  watchedAt?: string;
}
