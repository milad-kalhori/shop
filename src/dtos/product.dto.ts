import { IsString, IsNumber, Min, IsOptional } from 'class-validator'
import { Expose, Transform } from 'class-transformer'


export class CreateProductDTO {
  @IsString()
  name: string

  @IsString()
  description: string

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(0)
  price : number
}


export class UpdateProductDTO{
  @IsString()
  @IsOptional()
  name: string

  @IsString()
  @IsOptional()
  description: string

  @IsNumber()
  @IsOptional()
  price : number
}

export class ProductDTO {
  @Expose()
  name: string

  @Expose()
  description: string

  @Expose()
  price : number
}