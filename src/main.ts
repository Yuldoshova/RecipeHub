import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('RecipeHub')
    .setDescription('The RecipeHub API description')
    .setVersion('1.0')
    .addTag('apis')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, documentFactory);

  const appConfig = app.get(ConfigService)

  await app.listen(
    appConfig.get<number>('appConfig.port'),
    appConfig.get<string>('appConfig.host'), () => {
      console.log(`Server running port on ${appConfig.get<number>('appConfig.port')}`)
    });
}
bootstrap();
