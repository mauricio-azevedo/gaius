import { Column, Entity } from 'typeorm';

import { DefaultEntity } from '../../shared/entities/default.entity';

@Entity()
export class User extends DefaultEntity {
  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;
}
