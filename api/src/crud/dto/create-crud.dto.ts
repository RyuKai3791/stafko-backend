import { IsString } from 'class-validator';

export class CreateCrudDto {
    @IsString()
    name: string;

    @IsString()
    description: string;
}
