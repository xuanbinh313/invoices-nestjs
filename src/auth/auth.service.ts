import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/sign-in.dto';
import { UsersService } from './../users/users.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto';
import { jwtConstants } from 'src/constants/jwtConstants';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async singIn(signInDto: SignInDto) {
    const existUser = await this.usersService.findName(signInDto.username);
    if (!existUser) {
      throw new NotFoundException('User not found');
    }
    if (existUser.password !== signInDto.password) {
      throw new BadRequestException('Invalid password');
    }
    const { password, ...data } = existUser;
    const payload = {
      sub: existUser.userId,
      username: existUser.username,
      roles: existUser.roles,
    };
    const token = await this.jwtService.signAsync(payload, {
      secret: jwtConstants.secret,
    });
    return {
      data,
      token,
    };
  }

  async signUp(singUpDto: SignUpDto) {
    const existUser = await this.usersService.findName(singUpDto.username);
    if (existUser) {
      throw new BadRequestException('User already exists');
    }
    const { username, password, email } = singUpDto;
    return this.usersService.createUser(username, password, email);
  }
}
