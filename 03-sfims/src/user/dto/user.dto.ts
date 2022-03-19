import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsMobilePhone, IsNotEmpty, IsString } from "class-validator";

export class UserDto {
  @ApiProperty({
    example: "lalalalz"
  })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({
    example: "mYPaSswORD!@#"
  })
  @IsNotEmpty()
  @IsString()
  pw: string;

  @ApiProperty({
    example: "lalalalz@lalalalz.com"
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: "01012345678"
  })
  @IsNotEmpty()
  @IsMobilePhone()
  phone: string;

  @ApiProperty({
    example: "Incheon"
  })
  @IsNotEmpty()
  @IsString()
  address: string;
}
