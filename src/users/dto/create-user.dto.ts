import { IsArray, IsEmail, IsEnum, IsString } from "class-validator";
import { Role } from "src/common/role.enum";

export class CreateUserDto {
    @IsString()
    username: string;
  
    @IsEmail()
    email: string;
  
    @IsString()
    password: string;
    
    @IsArray()
    @IsEnum(Role, { each: true })
    roles: Role[] = [Role.USER];
}
