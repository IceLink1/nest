import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertyService {
  getProperty() {
    return 'This action returns all properties';
  }
  getById(id) {
    return { id };
  }
  setProperty(body) {
    return { body };
  }
  updateProperty(body) {
    return { body };
  }
}
