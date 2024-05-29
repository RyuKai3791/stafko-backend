import { Injectable } from '@nestjs/common';
import { DirectusService } from '../../application/use-cases/directus/directus.service';
import { DirectusItem } from '../models/directus.model';

@Injectable()
export class DirectusRepository {
  constructor(private readonly directusService: DirectusService) {}

  async findAll(collection: string): Promise<DirectusItem[]> {
    return this.directusService.getItems(collection);
  }

  async findById(collection: string, id: string): Promise<DirectusItem> {
    const items = await this.directusService.getItems(collection);
    return items.find(item => item.id === id);
  }

  async create(collection: string, data: any): Promise<DirectusItem> {
    return this.directusService.createItem(collection, data);
  }

  async update(collection: string, id: string, data: any): Promise<DirectusItem> {
    return this.directusService.updateItem(collection, id, data);
  }

  async delete(collection: string, id: string): Promise<DirectusItem> {
    return this.directusService.deleteItem(collection, id);
  }
}
