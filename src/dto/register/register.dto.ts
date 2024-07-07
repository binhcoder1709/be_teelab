import { IsEmail, IsString, Length, MaxLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  @Length(5, 30)
  user_name: string;

  @IsEmail()
  @MaxLength(30)
  email: string;

  @IsString()
  @Length(7, 50)
  password: string;
}
