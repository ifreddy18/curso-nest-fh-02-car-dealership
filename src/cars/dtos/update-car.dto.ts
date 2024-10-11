import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator'

export class UpdateCarDTO {
	// @IsString({ message: 'Brand deberia ser string'})

  @IsUUID()
  @IsOptional()
	readonly id?: string

  @IsString()
  @MinLength(3)
  @IsOptional()
	readonly brand?: string

	@IsString()
  @MinLength(3)
  @IsOptional()
	readonly model?: string
}
