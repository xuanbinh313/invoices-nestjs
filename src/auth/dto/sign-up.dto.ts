import { IsEmail, IsString } from "class-validator";

export class SignUpDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsEmail()
  email: string;
}
