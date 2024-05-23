import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class DirectusService {
  private directusUrl = process.env.DIRECTUS_URL || 'http://localhost:8055';

  async getItems(collection: string): Promise<any> {
    try {
      const response = await axios.get(`${this.directusUrl}/items/${collection}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async createItem(collection: string, data: any): Promise<any> {
    try {
      const response = await axios.post(`${this.directusUrl}/items/${collection}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async updateItem(collection: string, id: string, data: any): Promise<any> {
    try {
      const response = await axios.patch(`${this.directusUrl}/items/${collection}/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async deleteItem(collection: string, id: string): Promise<any> {
    try {
      const response = await axios.delete(`${this.directusUrl}/items/${collection}/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
// 
