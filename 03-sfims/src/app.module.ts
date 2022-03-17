import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { CustomLoggerMiddleWare } from './logger.middleware';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {


  configure(consumer: MiddlewareConsumer) {
    
    consumer.apply(CustomLoggerMiddleWare).forRoutes('*');

  }
}
