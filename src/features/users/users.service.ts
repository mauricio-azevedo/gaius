import { Injectable } from '@nestjs/common';

import { User } from './user.entity';
import { CreateUserDto } from './users.dtos';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  public async create(createUserDto: CreateUserDto): Promise<void> {
    return this.usersRepository.create(createUserDto);
  }

  public async list(): Promise<User[]> {
    return this.usersRepository.list();
  }
}
