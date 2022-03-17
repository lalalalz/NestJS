import { IsString, IsNotEmpty } from 'class-validator';


export class UserRequestDto {

    @IsNotEmpty()
    @IsString()
    id: string;

    @IsNotEmpty()
    @IsString()
    pw: string;

}