import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseUUIDPipe,
	Patch,
	Post,
} from '@nestjs/common'
import { CarsService } from './cars.service'
import { CreateCarDTO, UpdateCarDTO } from './dtos'

@Controller('cars')
// @UsePipes( ValidationPipe )
export class CarsController {
	constructor(private readonly carsService: CarsService) {}

	@Get()
	getAllCars() {
		return this.carsService.findAll()
	}

	@Get(':id')
	getCarById(@Param('id', ParseUUIDPipe) id: string) {
		return this.carsService.findOneById(id)
	}

	@Post()
	// @UsePipes( ValidationPipe )
	createCar(@Body() createCarDTO: CreateCarDTO) {
		return this.carsService.create(createCarDTO)
	}

	@Patch(':id')
	updateCar(
		@Param('id', ParseUUIDPipe) id: string,
		@Body() updateCarDTO: UpdateCarDTO,
	) {
		return this.carsService.update(id, updateCarDTO)
	}

	@Delete(':id')
	deleteCar(@Param('id', ParseUUIDPipe) id: string) {
		return this.carsService.delete(id)
	}
}
