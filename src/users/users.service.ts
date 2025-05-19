import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SignupDto } from 'src/auth/dto/signup.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createLocalUser(data: SignupDto) {
    const hashed = await bcrypt.hash(data.password, 10);
    return this.prisma.user.create({
      data: {
        ...data,
        password: hashed,
        provider: 'local',
      },
    });
  }

  async findByUsernameOrEmail(identifier: string) {
    return this.prisma.user.findFirst({
      where: {
        OR: [
          { email: identifier },
          { username: identifier },
        ],
      },
    });
  }

  async findOrCreateGoogleUser(googleProfile: any) {
    const { email, firstName, lastName, picture, providerId } = googleProfile;

    const existing = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existing) return existing;

    return this.prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        picture,
        provider: 'google',
        providerId,
      },
    });
  }
}
