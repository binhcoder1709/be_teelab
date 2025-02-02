import { IsEmail, IsString, Length, MaxLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @MaxLength(30)
  email: string;

  @IsString()
  @Length(7, 50)
  password: string;
}
