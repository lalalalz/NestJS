import { Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common';
import { AuthService } from "./auth.service";
import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly authService: AuthService) {
        super({ usernameField: "email" }); // if options exists, pass options to super method
    }

    async validate(email: string, password: string): Promise<any> {


        const user = await this.authService.validateUser(email, password);

        console.log(user);

        if(!user) {
            throw new UnauthorizedException("Not existed user");
        }

        return user;
    }
}
