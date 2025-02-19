import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIdPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): any {
    const val = parseInt(value);
    if (isNaN(val)) {
      throw new BadRequestException('id must be a number');
    }
    if (val <= 0) {
      throw new BadRequestException('id must be positive');
      return val;
    }
  }
}
