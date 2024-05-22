import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { StaffService } from './crud/staff.service';
import { ProjectEntity } from './crud/entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './crud/repositories/user.repository';

@Controller('/app')
export class AppController {
  constructor(
    private appService: AppService,
    private staffService: StaffService,
    
    @InjectRepository(UserRepository)
      private userRepository: UserRepository
    ) {}

  @Get()
  async getStaffIdFromDatabase(): Promise<number> {
    const user = await this.userRepository.findOne({ username: 'Username' });
    if (user !== undefined) {
      return user.staffId;
    } else {
      throw new Error('User not found.');
    }
  }

  @Post()
  createProjectData(@Body() body: any) {
    console.log(body);
  }

  @Get('/:id')
  getProject(@Param('id') id: string) {
    console.log(id);
  }
}
