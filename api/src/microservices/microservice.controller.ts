import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MicroserviceService } from './microservice.service';

@Controller()
export class MicroserviceController {
  constructor(private readonly microserviceService: MicroserviceService) {}

  @MessagePattern({ cmd: 'get_data' })
  async getData(collection: string): Promise<any> {
    return this.microserviceService.getData(collection);
  }

  @MessagePattern({ cmd: 'create_data' })
  async createData({ collection, data }: { collection: string, data: any }): Promise<any> {
    return this.microserviceService.createData(collection, data);
  }

  @MessagePattern({ cmd: 'update_data' })
  async updateData({ collection, id, data }: { collection: string, id: string, data: any }): Promise<any> {
    return this.microserviceService.updateData(collection, id, data);
  }

  @MessagePattern({ cmd: 'delete_data' })
  async deleteData({ collection, id }: { collection: string, id: string }): Promise<any> {
    return this.microserviceService.deleteData(collection, id);
  }
}
