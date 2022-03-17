import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';


export class UserLoginRequestDto {

    @ApiProperty({
        example: 'lalalalz',
        description: 'ID',
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    id: string;

    @ApiProperty({
        example: 'myPassword!!',
        description: 'PW',
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    pw: string;

}