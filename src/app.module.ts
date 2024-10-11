import { Module } from '@nestjs/common'
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';
import { TestGraphModule } from './test-graph/test-graph.module';

@Module({
	imports: [CarsModule, BrandsModule, SeedModule, TestGraphModule],
	controllers: [],
	providers: [],
	exports: [],
})
export class AppModule {}
