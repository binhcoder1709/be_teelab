import {
  Body,
  Controller,
  Headers,
  HttpCode,
  Post,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from 'src/dto/register/register.dto';
import { LoginDto } from 'src/dto/login/login.dto';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  @HttpCode(201)
  async addUserController(@Body() registerDto: RegisterDto) {
    return await this.authService.addUserService(registerDto);
  }

  @Post('/login')
  @HttpCode(200)
  async loginController(@Body() loginDto: LoginDto) {
    return await this.authService.loginService(loginDto);
  }

  @Post('/refresh')
  async refreshTokenController(@Headers('authorization') headers: string) {
    const tokenSplit = headers.split(' ')[1];
    if (!tokenSplit) {
      throw new UnauthorizedException('Missing refresh token');
    } else {
      return await this.authService.refreshToken(tokenSplit);
    }
  }
}
