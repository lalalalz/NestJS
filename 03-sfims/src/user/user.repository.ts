import { UserRequestDto } from './dto/user.request.dto';
import { Injectable } from '@nestjs/common';
import { Repository } from 'src/interface/repository';


@Injectable()
export class UserRepository implements Repository {

    private store = new Map<string, UserRequestDto>();
    
    create(user: UserRequestDto) {
        const {id, pw} = user;
        this.store.set(id, {id, pw});
        return this.store.get(id);
    }

    findOne(id: string) {
        return this.store.get(id);
    }

    existsById(id: string) {
        const user = this.findOne(id);
        return user == null ? false : true;
    }
}