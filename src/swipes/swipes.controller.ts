import { Controller, UseGuards, Get, Query, Req } from '@nestjs/common';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { GenericPagedDTO } from '../generics/genericPaged.dto';
import { DecodedJwt } from '../auth/dto/decodedJwt.dto';
import { SwipesService } from './swipes.service';
import { LatLngDTO } from './dto/latlng.dto';

@Controller('swipes')
@ApiUseTags('Swipes')
export class SwipesController {
  constructor(private readonly swipesService: SwipesService) {}

  @ApiOperation({
    title: 'Get a batch of cards for swiping',
    description: 'Gets 10 cards for swiping randomly',
  })
  @UseGuards(AuthGuard())
  @Get()
  getPaged(@Query() query: LatLngDTO, @Req() req: any) {
    const { lat, lng } = query;
    const user = req.user as DecodedJwt;
    return this.swipesService.getBatch(user.id, lat, lng);
  }
}
