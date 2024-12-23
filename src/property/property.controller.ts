import { createProperty } from './dto/crateProperty.dto';
import { PropertyService } from './property.service';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  // HttpCode,
  // UsePipes,
  ValidationPipe,
} from '@nestjs/common';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}
  @Get('all')
  getProperty() {
    return this.propertyService.getProperty();
  }

  @Get(':id')
  getPriorityById(
    @Param('id', ParseIntPipe) id,
    @Query('sort', ParseBoolPipe) sort,
  ) {
    // console.log(typeof id);
    console.log(typeof sort);
    return this.propertyService.getById(id);
  }

  @Post('create')
  // @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  // @HttpCode(203)
  setProperty(
    @Body(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        groups: ['create'],
      }),
    )
    body: createProperty,
  ) {
    return this.propertyService.setProperty(body);
  }

  @Patch(':id')
  updateProperty(
    @Body(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        groups: ['update'],
      }),
    )
    body: createProperty,
  ) {
    return this.propertyService.updateProperty(body);
  }
}
