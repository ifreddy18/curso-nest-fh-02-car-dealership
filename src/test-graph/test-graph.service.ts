import { Injectable } from '@nestjs/common';
import { CreateTestGraphInput } from './dto/create-test-graph.input';
import { UpdateTestGraphInput } from './dto/update-test-graph.input';

@Injectable()
export class TestGraphService {
  create(createTestGraphInput: CreateTestGraphInput) {
    return 'This action adds a new testGraph';
  }

  findAll() {
    return `This action returns all testGraph`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testGraph`;
  }

  update(id: number, updateTestGraphInput: UpdateTestGraphInput) {
    return `This action updates a #${id} testGraph`;
  }

  remove(id: number) {
    return `This action removes a #${id} testGraph`;
  }
}
