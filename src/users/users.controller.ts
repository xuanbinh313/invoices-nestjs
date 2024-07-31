import { Controller, Get } from '@nestjs/common';
import { Role } from 'src/common/role.enum';
import { Roles } from 'src/common/roles.decoration';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  @Roles(Role.ADMIN)
  getUsers() {
      return this.usersService.find()
  }
}
