import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    private users = [
        {
            userId: 1,
            username: 'binh',
            password: 'root',
            email: 'john@example.com',
            roles: ['admin'],
        },
        {
            userId: 2,
            username: 'maria',
            password: 'root',
            email: 'maria@example.com',
            roles: ['user'],
        },
    ];
    createUser(username: string, password: string, email: string) {
        const newUser = plainToInstance(CreateUserDto, { username, password, email });
        const user = { ...newUser, userId: this.users.length + 1 };
        this.users.push(user);
        return user;
    }
    findName(username: string) {
        const user = this.users.find((user) => user.username === username);
        if (user) return user;
        return null;
    }
    find() {
        return this.users;
    }
}
