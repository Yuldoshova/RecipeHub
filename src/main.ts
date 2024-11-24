import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService)

  await app.listen(
    config.get<number>('appConfig.port'),
    config.get<string>('appConfig.host'), () => {
      console.log(`Server running port on ${config.get<number>('appConfig.port')}`)
    });
}
bootstrap();
