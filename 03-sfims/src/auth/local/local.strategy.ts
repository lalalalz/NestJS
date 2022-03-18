import { UserLoginRequestDto } from './../../user/dto/user.login.request.dto';
import { Repository } from 'src/interface/repository';
import { HttpException, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local';



@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(@Inject("Repository") private readonly userRepository: Repository) {
        super({
            usernameField: 'id',
            passwordField: 'pw'
        });
    }

    async validate(id: string, pw: string): Promise<UserLoginRequestDto> {
        const user = this.userRepository.findOne(id);
        return user;
    }
}