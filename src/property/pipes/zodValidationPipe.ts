import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schemas: ZodSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const parsedValue = this.schemas.safeParse(value);
    if (parsedValue.success) {
      return parsedValue;
    }
    throw new BadRequestException(parsedValue.error.format());
  }
}
