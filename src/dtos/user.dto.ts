import { IsString, IsOptional, IsEnum } from 'class-validator'
import { Expose } from 'class-transformer'
import { Role } from '@prisma/client'


export class CreateUserDTO {
  @IsString()
  userName: string

  @IsString()
  password: string

  @IsOptional()
  @IsEnum(Role)
  role?: Role
}


export class UpdateUserDTO {
  @IsString()
  @IsOptional()
  userName: string

  @IsString()
  @IsOptional()
  password: string

  @IsOptional()
  @IsEnum(Role)
  role?: Role
}

export class UserDTO {
  @Expose()
  id : string

  @Expose()
  userName : string
}