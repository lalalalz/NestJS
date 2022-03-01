import { Body, Controller, Get, HttpCode, Optional, Param, Paramtype, Request, Response } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return "Hello";
    return this.appService.getHello();
  }
}
