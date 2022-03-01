import { CatsRepository } from "./cats.repository";
import { Cat, CatSchem } from "./cats.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";
import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchem }])], // name은 컬렉션 이름이 됨
  controllers: [CatsController],
  providers: [CatsService, CatsRepository]
})
export class CatsModule {}
