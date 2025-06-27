import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsOptional, IsPositive, Min, Max } from 'class-validator';

@InputType()
export class SearchMoviesInput {
  @Field()
  @IsString()
  query: string;

  @Field(() => Int, { nullable: true, defaultValue: 1 })
  @IsOptional()
  @IsPositive()
  @Min(1)
  @Max(1000)
  page?: number = 1;
}
