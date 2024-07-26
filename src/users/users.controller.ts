import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Roles } from 'src/common/roles.decoration';
import { Role } from 'src/common/role.enum';
import { AuthGuard } from 'src/common/auth.guard';

@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService) {}
    @Get()
    @Roles(Role.ADMIN)
    getUsers() {
        return this.usersService.find()
    }
}
