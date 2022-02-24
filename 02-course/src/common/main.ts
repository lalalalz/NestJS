import { HttpExceptionFilter } from './http-exception.filter';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe); // 클래스 유효성 체크 데코레이터 적용
  app.useGlobalFilters(new HttpExceptionFilter()); // 전역적으로 예외 필터 적용
  
  await app.listen(8080);
  
}
bootstrap();
