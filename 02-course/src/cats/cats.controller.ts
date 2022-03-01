import { CatsRequestDto } from './dto/cats.request.dto';
import { CatsService } from "./cats.service";
import { Controller, Get, Post, Body, UseFilters, HttpException, Param } from "@nestjs/common";
import { HttpExceptionFilter } from "../common/http-exception.filter";
import { IsString } from 'class-validator';

@UseFilters(HttpExceptionFilter)
@Controller("cats")
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    getCurrentCat() {
        throw new HttpException('set up my exception filter', 401);
        return;
    }

    @Post()
    async signUp(@Body() body: CatsRequestDto) {
        return await this.catsService.signUp(body);
    }

    @Post("login")
    logIn() {
        throw new HttpException('login error', 404);
    }

    @Post("logout")
    logout() {
        return;
    }

    @Post("upload/cats")
    uploadCatImg() {
        return;
    }
}
