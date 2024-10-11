import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TestGraph {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
