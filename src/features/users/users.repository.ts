import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { User } from './user.entity';
import { CreateUserDto } from './users.dtos';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private db: Repository<User>,
  ) {}

  public async create(createUserDto: CreateUserDto): Promise<void> {
    await this.db.insert(createUserDto);
  }

  public async list(): Promise<User[]> {
    return this.db.find();
  }
}
