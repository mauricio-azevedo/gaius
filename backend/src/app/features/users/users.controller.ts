import { Body, Controller, Get, Post } from '@nestjs/common';

import { User } from './user.entity';
import { CreateUserDto } from './users.dtos';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  public async create(@Body() createUserDto: CreateUserDto): Promise<void> {
    await this.usersService.create(createUserDto);
  }

  @Get()
  public async list(): Promise<User[]> {
    return this.usersService.list();
  }
}
