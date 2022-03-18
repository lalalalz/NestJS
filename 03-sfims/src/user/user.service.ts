import { AuthService } from './../auth/auth.service';
import { LocalStrategy } from './../auth/local/local.strategy';
import { UnauthorizedException } from '@nestjs/common';
import { Repository } from 'src/interface/repository';
import { Inject, Injectable } from '@nestjs/common';
import { UserLoginRequestDto } from './dto/user.login.request.dto';

@Injectable()
export class UserService {

    constructor(@Inject('Repository') private readonly userRepository: Repository, private readonly authService: AuthService) {}

    signUp(body: UserLoginRequestDto) {
        const { id, pw } = body;

        if(this.userRepository.existsById(id)) {
            return new UnauthorizedException('이미 존재하는 아이디 입니다.');
        } else {
            this.userRepository.create({id, pw});
            return '회원가입 성공';
        }
    }

    login(body: UserLoginRequestDto) {
        if(this.authService.localAuthentication(body) === null) {
            throw new UnauthorizedException('아이디와 비밀번호를 확인하세요');
        } else {
            return this.authService.issueJWT(body);
        }
    }
}
