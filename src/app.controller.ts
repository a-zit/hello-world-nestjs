import { Bind, Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('papopuSan')
  @Bind(Res())
  getPapopuSan(res: any) {
    const papopuSan = this.appService.getPapopuSan();
    const result = this.appService.getResultAddition(21, 1);
    res.status(HttpStatus.OK).json({ 'data': papopuSan, 'result': result, 'description': 'Hello, I\'m papopuSan' })
  }
}
