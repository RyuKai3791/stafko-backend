import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CrudEntity } from "./entities/crud.entity";
import { CreateCrudDto } from "./dto/create-crud.dto";
import { UpdateCrudDto } from "./dto/update-crud.dto";

@Injectable()
export class CrudRepository {
  save(arg0: { id: number; name: string; email: string; password: string; role: string; status: string; updated_at: Date; description?: string; }) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(CrudEntity)
    private repository: Repository<CrudEntity>
  ) {}

  create(createCrudDto: CreateCrudDto) {
    return this.repository.save(createCrudDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  async update(id: number, updateCrudDto: UpdateCrudDto) {
    const crud = await this.repository.findOne({ where: { id } });
    if (!crud) {
      throw new Error("Crud not found.");
    }
    return this.repository.save({ ...crud, ...updateCrudDto });
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
