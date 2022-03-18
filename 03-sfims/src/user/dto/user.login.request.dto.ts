import { UserDto } from './user.dto';
import { IsNotEmpty } from 'class-validator';
import { PickType } from '@nestjs/swagger';


export class UserLoginRequestDto extends PickType(UserDto, ['id', 'pw'] as const) {
}