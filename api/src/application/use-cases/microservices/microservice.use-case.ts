import { Injectable } from '@nestjs/common';
import { MicroserviceService } from './microservice.service';

@Injectable()
export class MicroservicesUseCase {
  constructor(private readonly microserviceService: MicroserviceService) {}

  async getData(collection: string): Promise<any> {
    return this.microserviceService.getData(collection);
  }

  async createData(collection: string, data: any): Promise<any> {
    return this.microserviceService.createData(collection, data);
  }

  async updateData(collection: string, id: string, data: any): Promise<any> {
    return this.microserviceService.updateData(collection, id, data);
  }

  async deleteData(collection: string, id: string): Promise<any> {
    return this.microserviceService.deleteData(collection, id);
  }
}
