import { UserRequestDto } from './../user/dto/user.request.dto';

export interface Repository {
    create(user: UserRequestDto);
    findOne(id: string);
    existsById(id: string);
}