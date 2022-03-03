import { AuthService } from './../auth/auth.service';
import { CatsRepository } from "./cats.repository";
import { Cat, CatSchem } from "./cats.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";
import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.service";
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/auth/local.strategy';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchem }]), PassportModule], // name은 컬렉션 이름이 됨
  controllers: [CatsController],
  providers: [CatsService, CatsRepository, AuthService, LocalStrategy],
  exports: [CatsRepository]
})
export class CatsModule {}
