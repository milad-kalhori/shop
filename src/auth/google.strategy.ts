import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, StrategyOptions, VerifyCallback } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private configService: ConfigService) {
    super({
  clientID: configService.get<string>('GOOGLE_CLIENT_ID'),
  clientSecret: configService.get<string>('GOOGLE_CLIENT_SECRET'),
  callbackURL: 'http://localhost:3000/auth/google/callback',
  scope: ['email', 'profile'],
} as StrategyOptions)}

  async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
  const { id, name, emails, photos } = profile;

  const user = {
    providerId: id,
    email: emails[0].value,
    firstName: name.givenName,
    lastName: name.familyName,
    picture: photos[0].value,
    provider: 'google',
    accessToken,
  };

  done(null, user);
}

}
