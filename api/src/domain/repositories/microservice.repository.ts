// src/domain/repositories/microservice.repository.ts

import { Injectable } from '@nestjs/common';
import { MicroserviceService } from '../../application/use-cases/microservices/microservice.service';
import { MicroserviceEntity } from '../models/microservice.model';

@Injectable()
export class MicroserviceRepository {
  constructor(private readonly microserviceService: MicroserviceService) {}

  async findAll(collection: string): Promise<MicroserviceEntity[]> {
    return this.microserviceService.getData(collection);
  }

  async findById(collection: string, id: string): Promise<MicroserviceEntity> {
    const entities = await this.microserviceService.getData(collection);
    return entities.find(entity => entity.id === id);
  }

  async create(collection: string, data: any): Promise<MicroserviceEntity> {
    return this.microserviceService.createData(collection, data);
  }

  async update(collection: string, id: string, data: any): Promise<MicroserviceEntity> {
    return this.microserviceService.updateData(collection, id, data);
  }

  async delete(collection: string, id: string): Promise<MicroserviceEntity> {
    return this.microserviceService.deleteData(collection, id);
  }
}
