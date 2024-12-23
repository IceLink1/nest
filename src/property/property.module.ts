import { Module } from '@nestjs/common';
import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';

@Module({
  controllers: [PropertyController],
  providers: [PropertyService],
})
export class PropertyModule {}
