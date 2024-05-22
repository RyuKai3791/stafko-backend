import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudModule } from './crud/crud.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DirectusService } from './directus.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CrudModule,
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [TypeOrmModule],
})

export class AppModule {}
