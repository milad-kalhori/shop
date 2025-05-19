import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(data: SignupDto) {
    return this.usersService.createLocalUser(data);
  }

  async login(data: LoginDto) {
    const user = await this.usersService.findByUsernameOrEmail(data.username || data.email);

    if (!user || !user.password) throw new UnauthorizedException();

    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) throw new UnauthorizedException();

    return user;
  }

  async validateOAuthLogin(profile: any) {
    return this.usersService.findOrCreateGoogleUser(profile);
  }
}
