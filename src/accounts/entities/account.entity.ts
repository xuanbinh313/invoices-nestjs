import { Role } from "src/common/role.enum";

export class Account {
    id: number;
    username: string;
    password: string;
    email: string;
    roles: Role[];
}