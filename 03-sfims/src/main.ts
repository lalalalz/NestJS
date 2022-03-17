import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 유효성 미들웨어 설정
  app.useGlobalPipes(new ValidationPipe());

  // swagger 설정
  const config = new DocumentBuilder()
    .setTitle('API DOCS')
    .setDescription('The SFIMS API Docs...')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // 서버 ON
  await app.listen(3000);
}
bootstrap();
