import { IsArray, IsEmail, IsEnum, IsString } from 'class-validator';
import { Role } from 'src/common/role.enum';

export class CreateAccountDto {
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
