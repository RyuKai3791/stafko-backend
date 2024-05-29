import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { DirectusService } from '../../../application/use-cases/directus/directus.service';

@Controller('directus')
export class DirectusController {
  constructor(private readonly directusService: DirectusService) {}

  @Get('items/:collection')
  async getItems(@Param('collection') collection: string): Promise<any> {
    return this.directusService.getItems(collection);
  }

  @Post('items/:collection')
  async createItem(
    @Param('collection') collection: string,
    @Body() data: any
  ): Promise<any> {
    return this.directusService.createItem(collection, data);
  }

  @Patch('items/:collection/:id')
  async updateItem(
    @Param('collection') collection: string,
    @Param('id') id: string,
    @Body() data: any
  ): Promise<any> {
    return this.directusService.updateItem(collection, id, data);
  }

  @Delete('items/:collection/:id')
  async deleteItem(
    @Param('collection') collection: string,
    @Param('id') id: string
  ): Promise<any> {
    return this.directusService.deleteItem(collection, id);
  }
}
