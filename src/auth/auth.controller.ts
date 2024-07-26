import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';
import { Public } from 'src/common/auth.decoration';

@Controller('auth')
@Public()
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  signIn(@Body() body: SignInDto) {
    return this.authService.singIn(body);
  }

  @Post('register')
  signUp(@Body() body: SignUpDto) {
    return this.authService.signUp(body);
  }
}
