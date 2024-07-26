import { Controller, Get } from '@nestjs/common';
import { Role } from 'src/common/role.enum';
import { Roles } from 'src/common/roles.decoration';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
    constructor(private accountsService:AccountsService) {}
    @Get()
    @Roles(Role.ADMIN)
    getUsers() {
        return this.accountsService.find()
    }
}
