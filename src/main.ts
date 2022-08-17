import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');

  const configService = app.get(ConfigService);
  const port = configService.get('SERVER_PORT');
  await app.listen(port);

  console.log(`The application is running on ${port} port`);
}
bootstrap();
