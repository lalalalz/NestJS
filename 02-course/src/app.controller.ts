import { Body, Controller, Get, HttpCode, Param, Paramtype, Request, Response } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(204)
  getHello(): string {
    return 'Hello';
    // return this.appService.getHello();
  }
}

