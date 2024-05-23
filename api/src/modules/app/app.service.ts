import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('MICROSERVICE_CLIENT') private readonly client: ClientProxy,
  ) {}

  async getData(collection: string): Promise<any> {
    return this.client.send({ cmd: 'get_data' }, collection).toPromise();
  }

  async createData(collection: string, data: any): Promise<any> {
    return this.client.send({ cmd: 'create_data' }, { collection, data }).toPromise();
  }

  async updateData(collection: string, id: string, data: any): Promise<any> {
    return this.client.send({ cmd: 'update_data' }, { collection, id, data }).toPromise();
  }

  async deleteData(collection: string, id: string): Promise<any> {
    return this.client.send({ cmd: 'delete_data' }, { collection, id }).toPromise();
  }
}
