import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,   
    whitelist: true,   // Strips properties that are not in the DTO
  }));

  const config = new DocumentBuilder()
  .setTitle('Hotel reservation documentation')
  .setDescription('Here we will be describing how to use this API')
  .setVersion('1.0')
  .addTag('hotel')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

await app.listen(3000);
}
bootstrap();
