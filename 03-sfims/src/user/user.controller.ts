import { UserLoginResponseDto } from './dto/user.login.response.dto';
import { UserService } from './user.service';
import { Body, Controller, Post } from '@nestjs/common';
import { UserRequestDto } from './dto/user.request.dto';
import { ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserSignResponseDto } from './dto/user.sign.response.dto';


@ApiTags('회원 API')
@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}


    @ApiOperation({
        summary: '회원 가입',
        description: 'SFIMS 회원가입을 한다.'

    })
    @ApiResponse({
        status: 200,
        description: '회원가입 성공!',
        type: UserSignResponseDto
    })
    @Post('sign') 
    signUp(@Body() body: UserRequestDto) {
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
    @Post('login')
    login(@Body() body: UserRequestDto) {
        return this.userService.login(body);
    }    
}
