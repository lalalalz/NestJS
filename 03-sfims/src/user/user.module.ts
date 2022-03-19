import { AuthModule } from "./../auth/auth.module";
import { Module, forwardRef } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.memory.repository";
import { UserService } from "./user.service";

@Module({
  imports: [forwardRef(() => AuthModule)],
  controllers: [UserController],
  providers: [UserService, { provide: "Repository", useClass: UserRepository }],
  exports: [{ provide: "Repository", useClass: UserRepository }]
})
export class UserModule {}
