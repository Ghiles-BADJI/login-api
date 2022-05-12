import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly userService: UserService) {}

    @Post('login')
    login(@Body() body: { email: string; password: string }) {
        return this.userService.exist(body.email, body.password);
    }

    @Post('signup')
    signup(@Body() body:{ email: string; password: string}) {
        return this.userService.add(body.email, body.password);
    }
}
