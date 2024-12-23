import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUsers(): string {
    return 'This action returns all users';
  }
}
