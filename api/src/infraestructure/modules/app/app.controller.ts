import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { AppService } from '../../../application/use-cases/app/app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':collection')
  async getData(@Param('collection') collection: string): Promise<any> {
    return this.appService.getData(collection);
  }

  @Post(':collection')
  async createData(@Param('collection') collection: string, @Body() data: any): Promise<any> {
    return this.appService.createData(collection, data);
  }

  @Patch(':collection/:id')
  async updateData(@Param('collection') collection: string, @Param('id') id: string, @Body() data: any): Promise<any> {
    return this.appService.updateData(collection, id, data);
  }

  @Delete(':collection/:id')
  async deleteData(@Param('collection') collection: string, @Param('id') id: string): Promise<any> {
    return this.appService.deleteData(collection, id);
  }
}
