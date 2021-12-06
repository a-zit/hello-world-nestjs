import { HttpStatus, Injectable, Res } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
  getPapopuSan(): string {
    return 'こんにちは パポプさん です';
  }
  
  getResultAddition(_no1:number, _no2:number): number {
      return _no1+_no2;
  }
}
