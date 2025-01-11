import { Body, Controller, Post } from '@nestjs/common';
import { Public } from './auth.decorator';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Public()
  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return { access_token: 'token' }
    // return this.authService.login(body.email, body.password);
  }
}
