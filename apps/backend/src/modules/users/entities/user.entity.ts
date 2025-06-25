import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  email: string;

  @Field()
  username: string;

  @Field({ nullable: true })
  displayName?: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field({ nullable: true })
  bio?: string;

  @Field()
  verified: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  // Never expose password in GraphQL
  password?: string;
}
