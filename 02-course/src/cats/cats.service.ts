import { CatsRepository } from './cats.repository';
import { Cat } from './cats.schema';
import { CatsRequestDto } from './dto/cats.request.dto';
import { Injectable, HttpException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CatsService {

    constructor(private readonly catsRepository: CatsRepository) {}

    async signUp(body: CatsRequestDto) {

        const { email, name, password } = body;
        const isCatExist = await this.catsRepository.existsByEmail(email);

        if(isCatExist) {
            throw new UnauthorizedException('Existed Email');
            throw new HttpException('Existed email', 403);
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const cat = await this.catsRepository.create({
            email,
            name,
            password: hashedPassword
        })

        return cat.readOnlyData;
    }

}
