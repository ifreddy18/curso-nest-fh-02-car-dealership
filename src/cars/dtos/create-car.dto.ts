import { IsString, MinLength } from 'class-validator'

export class CreateCarDTO {
	// @IsString({ message: 'Brand deberia ser string'})
  @IsString()
  @MinLength(3)
	readonly brand: string

	@IsString()
  @MinLength(3)
	readonly model: string
}
