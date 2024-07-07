import { IsEmail, IsNumber, IsString, Length, Max, Min } from 'class-validator';

export class UserDto {
  @IsString()
  @Length(5, 30)
  user_name: string;

  @IsEmail()
  @Length(11, 30)
  email: string;

  @IsString()
  password: string;

  @IsNumber()
  @Min(0)
  @Max(1)
  role: number;
}
