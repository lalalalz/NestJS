import { UserLoginRequestDto } from './../user/dto/user.login.request.dto';
import { Repository } from 'src/interface/repository';
import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(@Inject('Repository') private readonly userRepository: Repository, private readonly jwtService: JwtService) {}

    localAuthentication(body: UserLoginRequestDto) {
        const { id, pw } = body;
        const user = this.userRepository.findOne(id);

        if(user === undefined) return null;
        return user.pw === pw ? user : null;
    }

    issueJWT(body: UserLoginRequestDto) {
        const { id, pw } = body;
        return this.jwtService.sign({id});
    }
}
