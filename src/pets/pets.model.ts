import {
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { UsersModel } from '../users/users.model';

@Table({
  tableName: 'pets',
  paranoid: true,
  timestamps: true,
})
export class PetsModel extends Model<PetsModel> {
  @ForeignKey(() => UsersModel)
  ownerId: number;

  @BelongsTo(() => UsersModel)
  owner: UsersModel;

  @Column({
    allowNull: false,
  })
  name: string;

  @Column({
    allowNull: false,
  })
  edad: string;

  @Column({
    allowNull: false,
  })
  description: string;

  @Column({
    allowNull: false,
  })
  adopted: boolean;
}

export const PETS_PROVIDER = 'PETS_PROVIDER';

export const PetsProvider = {
  provide: 'PETS_PROVIDER',
  useValue: PetsModel,
};
