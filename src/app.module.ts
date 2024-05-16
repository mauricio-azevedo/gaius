import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { getTypeOrmConfigAsync } from './config/typeorm.config';
import { UsersModule } from './features/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env'] }),
    TypeOrmModule.forRootAsync(getTypeOrmConfigAsync),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
