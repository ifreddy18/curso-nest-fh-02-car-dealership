import { Module } from '@nestjs/common';
import { TestGraphService } from './test-graph.service';
import { TestGraphResolver } from './test-graph.resolver';

@Module({
  providers: [TestGraphResolver, TestGraphService],
})
export class TestGraphModule {}
