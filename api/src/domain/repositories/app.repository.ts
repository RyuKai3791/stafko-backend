import { Injectable } from '@nestjs/common';
import { AppService } from '../../application/use-cases/app/app.service';
import { AppEntity } from '../models/app.model';

@Injectable()
export class AppRepository {
  constructor(private readonly appService: AppService) {}

  async findAll(collection: string): Promise<AppEntity[]> {
    return this.appService.getData(collection);
  }

  async findById(collection: string, id: string): Promise<AppEntity> {
    const entities = await this.appService.getData(collection);
    return entities.find(entity => entity.id === id);
  }

  async create(collection: string, data: any): Promise<AppEntity> {
    return this.appService.createData(collection, data);
  }

  async update(collection: string, id: string, data: any): Promise<AppEntity> {
    return this.appService.updateData(collection, id, data);
  }

  async delete(collection: string, id: string): Promise<AppEntity> {
    return this.appService.deleteData(collection, id);
  }
}
