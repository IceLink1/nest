import { IsInt, IsPositive, IsString, Length } from 'class-validator';

export class createProperty {
  @IsString() //{ always: true }
  @Length(3, 12, { message: 'Name must be between 3 and 12 characters' })
  name: string;
  @IsString()
  @Length(2, 10, { groups: ['create'] })
  @Length(1, 15, { groups: ['update'] })
  description: string;
  @IsPositive()
  @IsInt() //{ always: true }
  area: number;
}
