import { ApiProperty } from "@nestjs/swagger";

export class UserLoginResponseDto {
  @ApiProperty({
    example: "로그인 성공"
  })
  message: string;
}
