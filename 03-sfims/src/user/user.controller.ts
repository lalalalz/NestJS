import { FailedResponseDto } from './dto/response.fail.dto';
import { UserSignRequestDto } from './dto/user.sign.request.dto';
import { UserLoginResponseDto } from './dto/user.login.response.dto';
import { UserService } from './user.service';
import { Body, Controller, Post, Request, Response, UseGuards } from '@nestjs/common';
import { UserLoginRequestDto } from './dto/user.login.request.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserSignResponseDto } from './dto/user.sign.response.dto';


@ApiTags('회원 API')
@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}


    @ApiOperation({
        summary: '회원 가입',
        description: 'SFIMS 회원가입을 한다.',
    })
    @ApiResponse({
        status: 200,
        description: '회원가입 성공!',
        type: UserSignResponseDto
    })
    @Post('sign') 
    signUp(@Body() body: UserSignRequestDto) {
        return this.userService.signUp(body);
    }


    @ApiOperation({
        summary: '회원 로그인',
        description: 'SFIMS 로그인을 한다.'

    })
    @ApiResponse({
        status: 200,
        description: '로그인 성공!',
        type: UserLoginResponseDto
    })
    @ApiResponse({
        status: 401,
        description: '아이디와 비밀번호를 확인하세요',
        type: FailedResponseDto
    })
    @Post('login')
    login(@Body() body: UserLoginRequestDto) {
        return this.userService.login(body);
    }    
}
