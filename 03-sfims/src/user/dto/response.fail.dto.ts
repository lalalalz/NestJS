import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class FailedResponseDto {
  @ApiProperty({
    example: "401"
  })
  @IsNumber()
  statusCode: number;

  @ApiProperty({
    example: "응답에 실패했습니다."
  })
  @IsString()
  message: string;

  @ApiProperty({
    example: "Unauthorized"
  })
  @IsString()
  error: string;
}
