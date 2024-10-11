import { CreateTestGraphInput } from './create-test-graph.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTestGraphInput extends PartialType(CreateTestGraphInput) {
  @Field(() => Int)
  id: number;
}
