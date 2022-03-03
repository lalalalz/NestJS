import { CatsModule } from "./../cats/cats.module";
import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Module({
    imports: [CatsModule],
    providers: [AuthService],
    exports: [AuthService]
})
export class AuthModule {}
