export class MicroserviceEntity {
  id: string;
  collection: string;
  data: any;
  createdAt: Date;
  updatedAt: Date;

  constructor(id: string, collection: string, data: any, createdAt: Date, updatedAt: Date) {
    this.id = id;
    this.collection = collection;
    this.data = data;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  addData(key: string, value: any) {
    this.data[key] = value;
    this.updatedAt = new Date();
  }

  removeData(key: string) {
    delete this.data[key];
    this.updatedAt = new Date();
  }

  hasData(key: string): boolean {
    return this.data.hasOwnProperty(key);
  }
}
