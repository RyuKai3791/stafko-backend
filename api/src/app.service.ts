import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { User } from './crud/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findOne(options: FindOneOptions<User>): Promise<User> {
    return this.usersRepository.findOne(options);
  }
}

@Injectable()
export class AppService {
  getData(): any {
    // Obtain data from Directus by making a request to the Directus API
    return { message: 'Working!' };
  }
}
