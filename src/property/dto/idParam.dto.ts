import { IsInt, IsPositive } from 'class-validator';

export class idParamDto {
  @IsPositive()
  @IsInt()
  id: number;
}
