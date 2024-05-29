import { Module } from '@nestjs/common';
import { MicroserviceController } from './microservice.controller';
import { MicroserviceService } from '../../../application/use-cases/microservices/microservice.service';
import { DirectusModule } from '../directus/directus.module';

@Module({
  imports: [DirectusModule],
  controllers: [MicroserviceController],
  providers: [MicroserviceService],
})
export class MicroserviceModule {}
