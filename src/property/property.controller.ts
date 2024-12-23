import { createPropertySchemas, CreateZodPropertyDto } from './dto/createPropertyZod.dto';
import { createProperty } from './dto/crateProperty.dto';
import { idParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdPipe';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import { PropertyService } from './property.service';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
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
  @UsePipes(new ZodValidationPipe(createPropertySchemas))
  setProperty(
    @Body()
    body: CreateZodPropertyDto,
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
