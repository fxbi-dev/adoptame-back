import { Module } from '@nestjs/common';
import { PetsProvider } from './pets.model';
import { PetPicturesProvider } from './petPictures.model';
import { PetTypesProvider } from './petTypes.model';

@Module({
  providers: [PetsProvider, PetPicturesProvider, PetTypesProvider],
  exports: [PetsProvider, PetPicturesProvider, PetTypesProvider],
})
export class PetsModule {}
