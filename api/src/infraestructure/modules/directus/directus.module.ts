import { Module } from '@nestjs/common';
import { DirectusService } from '../../../application/use-cases/directus/directus.service';

@Module({
  providers: [DirectusService],
  exports: [DirectusService],
})
export class DirectusModule {}
