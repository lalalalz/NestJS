import { UserService } from './user.service';
import { Body, Controller, Post } from '@nestjs/common';
import { UserRequestDto } from './dto/user.request.dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post('sign') 
    signUp(@Body() body: UserRequestDto) {
        return this.userService.signUp(body);
    }

    @Post('login')
    login(@Body() body: UserRequestDto) {
        return this.userService.login(body);
    }


}
