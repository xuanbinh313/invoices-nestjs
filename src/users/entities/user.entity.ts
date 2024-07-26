import { Role } from "src/common/role.enum";

export class User {
    id: number;
    username: string;
    password: string;
    email: string;
    roles: Role[];
}