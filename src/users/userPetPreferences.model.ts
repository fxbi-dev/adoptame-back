import {
  Table,
  Model,
  ForeignKey,
  PrimaryKey,
  Column,
} from 'sequelize-typescript';
import { PetTypesModel } from '../pets/petTypes.model';
import { UserConfigModel } from './userConfig.model';

@Table({
  tableName: 'userPetPreference',
  timestamps: true,
})
export class UserPetPreferenceModel extends Model<UserPetPreferenceModel> {
  @PrimaryKey
  @Column({
    unique: true,
  })
  id: number;

  @ForeignKey(() => UserConfigModel)
  userConfigId: number;

  @ForeignKey(() => PetTypesModel)
  petTypeId: number;
}

export const USER_PET_PREFERENCE_PROVIDER = 'USER_PET_PREFERENCE_PROVIDER';

export const UserPetPreferenceProvider = {
  provide: USER_PET_PREFERENCE_PROVIDER,
  useValue: UserPetPreferenceModel,
};
