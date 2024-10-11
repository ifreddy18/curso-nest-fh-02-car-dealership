import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TestGraphService } from './test-graph.service';
import { TestGraph } from './entities/test-graph.entity';
import { CreateTestGraphInput } from './dto/create-test-graph.input';
import { UpdateTestGraphInput } from './dto/update-test-graph.input';

@Resolver(() => TestGraph)
export class TestGraphResolver {
  constructor(private readonly testGraphService: TestGraphService) {}

  @Mutation(() => TestGraph)
  createTestGraph(@Args('createTestGraphInput') createTestGraphInput: CreateTestGraphInput) {
    return this.testGraphService.create(createTestGraphInput);
  }

  @Query(() => [TestGraph], { name: 'testGraph' })
  findAll() {
    return this.testGraphService.findAll();
  }

  @Query(() => TestGraph, { name: 'testGraph' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.testGraphService.findOne(id);
  }

  @Mutation(() => TestGraph)
  updateTestGraph(@Args('updateTestGraphInput') updateTestGraphInput: UpdateTestGraphInput) {
    return this.testGraphService.update(updateTestGraphInput.id, updateTestGraphInput);
  }

  @Mutation(() => TestGraph)
  removeTestGraph(@Args('id', { type: () => Int }) id: number) {
    return this.testGraphService.remove(id);
  }
}
