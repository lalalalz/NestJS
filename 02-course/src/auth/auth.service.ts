import { CatsRepository } from './../cats/cats.repository';
import { Injectable } from '@nestjs/common';
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {

    constructor(private readonly catsRepository: CatsRepository) {}

    async validateUser(email: string, password: string): Promise<any> {

        const user = await this.catsRepository.findOne(email);
        const isValidPassword = await bcrypt.compare(password, user.password);

        if(user && isValidPassword) {
            const { email } = user;
            return email; 
        }

        return null;
    }
}
