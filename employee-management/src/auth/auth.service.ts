import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(username: string, password: string) {
    if (username !== 'admin' || password !== 'password') {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { username };
    return { access_token: this.jwtService.sign(payload) };
  }
}
