import { UnauthorizedException } from '@nestjs/common';
import { Repository } from 'src/interface/repository';
import { Inject, Injectable } from '@nestjs/common';
import { UserLoginRequestDto } from './dto/user.login.request.dto';

@Injectable()
export class UserService {

    constructor(@Inject("Repository") private readonly userRepository: Repository) {}

    signUp(body: UserLoginRequestDto) {
        
        const { id, pw } = body;

        if(this.userRepository.existsById(id)) {
            return new UnauthorizedException("이미 존재하는 아이디 입니다.");
        } else {
            this.userRepository.create({id, pw});
            return "회원가입 성공";
        }
    }

    login(body: UserLoginRequestDto) {

        const { id, pw } = body;
        const user = this.userRepository.findOne(id);

        if(user == undefined) {
            return new UnauthorizedException("존재하지 않는 회원입니다.");
        } else {
            return user.pw == pw ? "로그인 성공" : "로그인 실패";
        }
    }
}
