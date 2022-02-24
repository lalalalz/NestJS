import { HttpExceptionFilter } from './../http-exception.filter';
import { CatsService } from './cats.service';
import { Controller, Delete, Get, HttpException, Patch, Post, Put, UseFilters, Param, ParseIntPipe } from '@nestjs/common';

@Controller('cats')
@UseFilters(HttpExceptionFilter) // 모듈 전역적으로 필터가 적용된 모습
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    //@UseFilters(HttpExceptionFilter) // 지역적으로 필터를 적용한 모습
    getAllCat() {
        /**
         * Nest에서 제공하는 HTTP 관련 에러 모듈
         */
        throw new HttpException('API IS BROKEN!', 401);
        /**
         * 이와 같이 Custom을 할 수도 있음. 그러나 이를 좀 더 효율적으로 에러를 생성할 수 있음
         * 즉, 
         */
        throw new HttpException({success: false, message: 'API IS BROKEN!'}, 401);

        /**
         * filter를 적용한 모습, 필터가 적용되었다면, 이와 같이 전송된 
         */
        throw new HttpException('API Broken!', 401);

        
        return 'all cat';
    }

    @Get(':id')
    getOneCat(@Param('id', ParseIntPipe) param: number) {
        /**
         * 파이프를 적용한 모습. 공식문서를 참고하면 여러 파이프를 확인할 수 있음...
         * ParseIntPipe를 적용시키면 param의 디폴트 타입인 스트링을 숫자 타입으로 변환
         * 추가로, 이와 같이 적용하면 param에 대하여 number가 아닌 경우는 에러를 반환시켜줌 -> 유효성 검사 자동화
         */
        console.log(param);
        return 'one cat';
    }

    @Post()
    createCat() {
        return 'create cat';
    }

    @Put(':id')
    updateCat() {
        return 'update cat';
    }

    @Patch(':id')
    updatePartialCat() {
        return 'update partial cat';
    }

    @Delete(':id')
    deleteCat() {
        return 'delete cat';
    }
}
