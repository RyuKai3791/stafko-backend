import { PartialType } from '@nestjs/mapped-types';
import { CreateCrudDto } from './create-crud.dto';

export class UpdateCrudDto extends PartialType(CreateCrudDto) {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    status: string;
    updated_at: Date;
}
