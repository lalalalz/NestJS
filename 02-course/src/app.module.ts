import { LoggerMiddleware } from './logger.middleware';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CatsModule } from './cats/cats.module';
import mongoose from 'mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {

  private readonly isDev: boolean = process.env.MODE === 'dev' ? true : false;

  configure(consumer: MiddlewareConsumer) {
    // 미들웨어는 module 데코레이터에서는 추가할 수 없고,
    // 이와 같이 AppModule 클래스의 configure 메소드를 통해 추가할 수 있다.
    // 그리고 아래와 같이 등록하면 된다.
    // 여기서 forRoutes('cats')라고 지정한다면 cats에 대한 route에 대해서만
    // 미들웨어를 작동시킬 수 있다. *를 사용한다면 모든 route에 대해 작동이 된다.
    consumer.apply(LoggerMiddleware).forRoutes('*');
    mongoose.set('debug', this.isDev);
  }

}
