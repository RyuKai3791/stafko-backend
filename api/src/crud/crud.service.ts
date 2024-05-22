import { Injectable } from '@nestjs/common';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';
import { CrudRepository } from './crud.repository';

@Injectable()
export class CrudService {
  constructor(private crudRepository: CrudRepository) {}

  create(createCrudDto: CreateCrudDto) {
    return this.crudRepository.create(createCrudDto);
  }

  findAll() {
    return this.crudRepository.findAll();
  }

  findOne(id: number) {
    return this.crudRepository.findOne(id);
  }

  async update(id: number, updateCrudDto: UpdateCrudDto) {
    const crud = await this.crudRepository.findOne(id);
    if (!crud) {
      throw new Error('Crud not found.');
    }
    return this.crudRepository.save({ ...crud, ...updateCrudDto });
  }
  
  remove(id: number) {
    return this.crudRepository.remove(id);
  }
}
