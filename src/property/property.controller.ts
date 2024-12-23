import { createProperty } from './dto/crateProperty.dto';
import { idParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdPipe';
import { PropertyService } from './property.service';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  // Query,
  // ParseBoolPipe,
  // ValidationPipe,
} from '@nestjs/common';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}
  @Get('all')
  getProperty() {
    return this.propertyService.getProperty();
  }

  @Get(':id')
  getPriorityById(@Param('id', ParseIntPipe) id) {
    return this.propertyService.getById(id);
  }

  @Post('create')
  setProperty(
    @Body()
    body: createProperty,
  ) {
    return this.propertyService.setProperty(body);
  }

  @Patch(':id')
  updateProperty(
    // @Param() param: idParamDto,
    @Param('id', ParseIdPipe) id,
    @Body()
    body: createProperty,
  ) {
    return this.propertyService.updateProperty(body);
  }
}
