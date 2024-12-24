import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class HeadersValidation {
  @IsString()
  @Expose({ name: 'access-token' })
  accessToken: string;
}
