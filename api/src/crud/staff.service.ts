import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { Staff } from './entities/staff.entity';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff)
    private staffRepository: Repository<Staff>,
  ) {}

  async findProjectsByStaffId(staffId: string) {
    const options: FindOneOptions<Staff> = {
      where: { id: staffId },
      select: ['id', 'projects']
    };

    const staff = await this.staffRepository.findOne(options);

    if (!staff) {
      throw new NotFoundException('Staff not found');
    }

    return staff.projects || [];
  }
}
