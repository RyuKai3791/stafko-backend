// src/application/use-cases/directus/directus.use-case.ts

import { Injectable } from '@nestjs/common';
import { DirectusService } from './directus.service';

@Injectable()
export class DirectusUseCase {
  constructor(private readonly directusService: DirectusService) {}

  async getItems(collection: string): Promise<any> {
    return this.directusService.getItems(collection);
  }

  async createItem(collection: string, data: any): Promise<any> {
    return this.directusService.createItem(collection, data);
  }

  async updateItem(collection: string, id: string, data: any): Promise<any> {
    return this.directusService.updateItem(collection, id, data);
  }

  async deleteItem(collection: string, id: string): Promise<any> {
    return this.directusService.deleteItem(collection, id);
  }
}
