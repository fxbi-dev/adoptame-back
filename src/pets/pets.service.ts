import { Injectable, Inject } from '@nestjs/common';
import { PETS_PROVIDER } from './pets.model';
import { PetsModel } from '../../server/pets/pets.model';

@Injectable()
export class PetsService {
  constructor(@Inject(PETS_PROVIDER) private readonly Pets: typeof PetsModel) {}

  async getPaged(userId: number, adopted: boolean, page = 1, perPage = 10) {
    return this.Pets.findAll({
      where: {
        ownerId: userId,
        adopted,
      },
      offset: (page - 1) * perPage,
      limit: perPage,
    });
  }
}
