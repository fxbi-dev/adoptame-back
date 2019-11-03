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
      const populate = async () => {
        await PetTypesModel.bulkCreate([
          {
            name: 'Perro',
          },
          {
            name: 'Gato',
          },
          {
            name: 'Conejo',
          },
          {
            name: 'Tortuga',
          },
          {
            name: 'Ave',
          },
        ]);
      };

      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'ec2-13-59-129-27.us-east-2.compute.amazonaws.com',
        port: 3306,
        username: 'adoptame',
        password: '123456qwerty',
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
      // await sequelize.sync({ force: true });
      // await populate();
      return sequelize;
    },
  },
];
