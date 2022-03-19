import { UserLoginRequestDto } from "./dto/user.login.request.dto";
import { Injectable } from "@nestjs/common";
import { Repository } from "src/interface/repository";

@Injectable()
export class UserRepository implements Repository {
  private store = new Map<string, UserLoginRequestDto>();

  create(user: UserLoginRequestDto) {
    const { id, pw } = user;
    this.store.set(id, { id, pw });
    return this.store.get(id);
  }

  findOne(id: string) {
    return this.store.get(id);
  }

  existsById(id: string) {
    const user = this.findOne(id);
    return user == null ? false : true;
  }

  existsByIdAndPassword(id: any, pw: any) {
    const user = this.findOne(id);
    if (user === null) return false;
    return user.pw === pw;
  }
}
