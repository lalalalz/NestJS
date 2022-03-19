import { UserLoginRequestDto } from "./../user/dto/user.login.request.dto";
import { Repository } from "src/interface/repository";
import { Inject, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    @Inject("Repository") private readonly userRepository: Repository,
    private readonly jwtService: JwtService
  ) {}

  async localAuthentication(user: UserLoginRequestDto) {
    if ((await this.userRepository.existsByIdAndPassword(user.id, user.pw)) === null) {
      return null;
    } else {
      return await this.jwtService.signAsync({ id: user.id });
    }
  }
}
