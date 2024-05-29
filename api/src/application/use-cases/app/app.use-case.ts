import { Injectable } from '@nestjs/common';
import { AppService } from './app.service';

@Injectable()
export class AppUseCase {
  constructor(private readonly appService: AppService) {}

  async getData(collection: string): Promise<any> {
    return this.appService.getData(collection);
  }

  async createData(collection: string, data: any): Promise<any> {
    return this.appService.createData(collection, data);
  }

  async updateData(collection: string, id: string, data: any): Promise<any> {
    return this.appService.updateData(collection, id, data);
  }

  async deleteData(collection: string, id: string): Promise<any> {
    return this.appService.deleteData(collection, id);
  }
}
