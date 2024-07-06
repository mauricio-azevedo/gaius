import { INestApplication, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

/**
 * Bootstrap the application
 */
async function bootstrap(): Promise<void> {
  const app: INestApplication = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  const port: number = configService.get<number>('PORT', 3000);

  await app.listen(port);
}

bootstrap().catch((e: unknown): void => {
  Logger.error('Error during bootstrap', e);
  throw e;
});
