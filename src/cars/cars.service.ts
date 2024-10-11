import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common'
import { Car } from './interfaces/car.interface'
import { v4 as uuid } from 'uuid'
import { CreateCarDTO, UpdateCarDTO } from './dtos'

@Injectable()
export class CarsService {
	private cars: Car[] = [
		{
			id: uuid(),
			brand: 'Ford',
			model: 'Fiesta',
		},
		{
			id: uuid(),
			brand: 'Toyota',
			model: '4Runner',
		},
		{
			id: uuid(),
			brand: 'Ford',
			model: 'Explorer',
		},
	]

	findAll(): Car[] {
		return this.cars
	}

	findOneById(id: string): Car {
    const car = this.cars.find(car => car.id == id)
    if (!car) throw new NotFoundException(`Car with id '${id}' not found`)
		return car
	}

	create(createCarDTO: CreateCarDTO) {
		const newCar: Car = {
			id: uuid(),
			...createCarDTO,
		}

		this.cars.push(newCar)

		return newCar
	}

	update(id: string, updateCarDTO: UpdateCarDTO) {
		let carDB = this.findOneById(id)

		if (updateCarDTO.id && updateCarDTO.id !== id)
			throw new BadRequestException(`Different id in params and body`)

		this.cars = this.cars.map(car => {
			if (car.id == carDB.id) {
				carDB = { ...carDB, ...updateCarDTO, id }
				return carDB
			}
		})

		return carDB
	}

	delete(id: string) {
		this.findOneById(id)
    this.cars = this.cars.filter(car => car.id !== id)
	}
}
