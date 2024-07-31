import { UsersService } from './../users/users.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/constants/jwtConstants';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async singIn(signInDto: SignInDto) {
    const existAccount = await this.usersService.findName(signInDto.username);
    if (!existAccount) throw new NotFoundException('User not found');
    if (existAccount.password !== signInDto.password) throw new BadRequestException('Invalid password');
    const { password, ...data } = existAccount;
    const payload = {
      sub: existAccount.userId,
      username: existAccount.username,
      roles: existAccount.roles,
    };
    const token = await this.jwtService.signAsync(payload, { secret: jwtConstants.secret });
    return { data, token };
  }

  async signUp(singUpDto: SignUpDto) {
    const existAccount = await this.usersService.findName(singUpDto.username);
    if (existAccount) throw new BadRequestException('User already exists');
    const { username, password, email } = singUpDto;
    return this.usersService.createUser(username, password, email);
  }
}
