import { InputType, Field, ID } from '@nestjs/graphql';
import { IsUUID, IsEnum } from 'class-validator';
import { PrivacyLevel } from '@movie-vibes/database';

@InputType()
export class ChangeListPrivacyInput {
  @Field(() => ID)
  @IsUUID()
  listId: string;

  @Field(() => PrivacyLevel)
  @IsEnum(PrivacyLevel)
  privacy: PrivacyLevel;
}
