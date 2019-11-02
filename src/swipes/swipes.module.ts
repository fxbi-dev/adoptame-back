import { Module } from '@nestjs/common';
import { SwipesProvider } from './swipes.model';

@Module({
  providers: [SwipesProvider],
  exports: [SwipesProvider],
})
export class SwipesModule {}
