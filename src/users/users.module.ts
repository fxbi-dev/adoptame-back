import { Module } from '@nestjs/common';
import { UsersProvider } from './users.model';
import { UserConfigProvider } from './userConfig.model';
import { UserPetPreferenceProvider } from './userPetPreferences.model';

@Module({
  providers: [UsersProvider, UserConfigProvider, UserPetPreferenceProvider],
  exports: [UsersProvider, UserConfigProvider, UserPetPreferenceProvider],
})
export class UsersModule {}
