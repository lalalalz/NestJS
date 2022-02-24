import { CatsRequestDto } from './dto/cats.request.dto';
import { HttpExceptionFilter } from './../common/http-exception.filter';
import { CatsService } from './cats.service';
import { Controller, Delete, Get, HttpException, Patch, Post, Put, UseFilters, Param, ParseIntPipe, Body } from '@nestjs/common';

@Controller('cats')
@UseFilters(HttpExceptionFilter) // 모듈 전역적으로 필터가 적용된 모습
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    getCurrentCat() {
        return;
    }

    @Post()
    async signUp(@Body() body: CatsRequestDto) {
        return await this.catsService.signUp(body);
    }

    @Post('login')
    logIn() {
        return;
    }

    @Post('logout')
    logout() {
        return;
    }

    @Post('upload/cats')
    uploadCatImg() {
        return;
    }    
}
