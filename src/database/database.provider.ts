import { Sequelize } from 'sequelize-typescript';
import { UsersModel } from '../users/users.model';
import { PetsModel } from '../pets/pets.model';
import { PetPicturesModel } from '../pets/petPictures.model';
import { PetTypesModel } from '../pets/petTypes.model';
import { UserConfigModel } from '../users/userConfig.model';
import { UserPetPreferenceModel } from '../users/userPetPreferences.model';
import { SwipesModel } from '../swipes/swipes.model';
import { MessagesModel } from '../chat/messages.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'ErizO321456',
        database: 'adoptame',
      });
      sequelize.addModels([
        UsersModel,
        UserConfigModel,
        UserPetPreferenceModel,
        PetsModel,
        PetPicturesModel,
        PetTypesModel,
        SwipesModel,
        MessagesModel,
      ]);
      await sequelize.sync({ alter: true });
      return sequelize;
    },
  },
];
