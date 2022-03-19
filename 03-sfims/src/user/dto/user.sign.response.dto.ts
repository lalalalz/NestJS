import { ApiProperty } from "@nestjs/swagger";

export class UserSignResponseDto {
  @ApiProperty({
    example: "회원가입 성공"
  })
  message: string;
}
