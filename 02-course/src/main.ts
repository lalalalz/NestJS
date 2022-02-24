import { HttpExceptionFilter } from './http-exception.filter';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 전역적으로 필터를 적용
  app.useGlobalFilters(new HttpExceptionFilter());
  
  await app.listen(8080);
}
bootstrap();
