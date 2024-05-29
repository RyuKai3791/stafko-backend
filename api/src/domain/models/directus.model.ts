export class DirectusItem {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  [key: string]: any;

  constructor(id: string, createdAt: Date, updatedAt: Date, data: { [key: string]: any }) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    Object.assign(this, data);
  }

  updateData(newData: { [key: string]: any }) {
    Object.assign(this, newData);
    this.updatedAt = new Date();
  }
}
