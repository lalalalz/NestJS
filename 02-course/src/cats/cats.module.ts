import { Cat, CatSchem } from './cats.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchem}])],
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule {}
