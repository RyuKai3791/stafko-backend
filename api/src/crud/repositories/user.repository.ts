import { Entity, Repository, EntityManager } from 'typeorm';
import { User } from '../entities/user.entity';

export class UserRepository {
    findOne(arg0: { username: string; }) {
      throw new Error('Method not implemented.');
    }
    private repository: Repository<User>;

    constructor(private manager: EntityManager) {
        this.repository = manager.getRepository(User);
    }

    async findByEmail(email: string): Promise<User> {
        return this.repository.findOne({ where: { email } });
    }
}
