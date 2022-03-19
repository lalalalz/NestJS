import { AuthService } from "./../auth/auth.service";
import { UnauthorizedException } from "@nestjs/common";
import { Repository } from "src/interface/repository";
import { Inject, Injectable } from "@nestjs/common";
import { UserLoginRequestDto } from "./dto/user.login.request.dto";
import { Response } from "express";

@Injectable()
export class UserService {
  constructor(
    @Inject("Repository") private readonly userRepository: Repository,
    private readonly authService: AuthService
  ) {}

  signUp(user: UserLoginRequestDto) {
    if (this.userRepository.existsById(user.id)) {
      return new UnauthorizedException("이미 존재하는 아이디 입니다.");
    } else {
      this.userRepository.create(user);
      return "회원가입 성공";
    }
  }

  async login(response: Response, user: UserLoginRequestDto) {
    const token = await this.authService.localAuthentication(user);

    if (token === null) {
      throw new UnauthorizedException("아이디와 비밀번호를 확인하세요");
    } else {
      response.cookie("jwt", token);
      return "로그인 성공";
    }
  }
}
