import { Controller, Get, Req, Query, UseGuards, Res } from '@nestjs/common';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { PetsService } from './pets.service';
import { DecodedJwt } from '../auth/dto/decodedJwt.dto';
import { GenericPagedDTO } from '../generics/genericPaged.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('pets')
// @ApiUseTags('Pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @ApiOperation({
    title: 'Get pets paged',
    description: 'Gets the list of the current users pets',
  })
  @UseGuards(AuthGuard())
  @Get()
  getPaged(@Query() query: GenericPagedDTO, @Req() req: any) {
    const { page, perPage } = query;
    console.log(req.user);
    const user = req.user as DecodedJwt;
    return this.petsService.getPaged(user.id, false, page || 1, perPage || 10);
  }
}
