import { Injectable } from '@nestjs/common';
import { DirectusService } from '../directus/directus.service';

@Injectable()
export class MicroserviceService {
  constructor(private readonly directusService: DirectusService) {}

  async getData(collection: string): Promise<any> {
    return this.directusService.getItems(collection);
  }

  async createData(collection: string, data: any): Promise<any> {
    return this.directusService.createItem(collection, data);
  }

  async updateData(collection: string, id: string, data: any): Promise<any> {
    return this.directusService.updateItem(collection, id, data);
  }

  async deleteData(collection: string, id: string): Promise<any> {
    return this.directusService.deleteItem(collection, id);
  }
}
