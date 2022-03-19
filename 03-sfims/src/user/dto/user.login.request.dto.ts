import { UserDto } from "./user.dto";
import { PickType } from "@nestjs/swagger";

export class UserLoginRequestDto extends PickType(UserDto, ["id", "pw"] as const) {}
