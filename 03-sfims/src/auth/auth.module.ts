import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local/local.strategy';
import { UserModule } from './../user/user.module';
import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';

@Module({
  imports: [
    forwardRef(() => UserModule),
    JwtModule.register({
      secret: 'MYsEcReTKey',
      signOptions: {
        expiresIn: '1y'
      }
    }), 
  ],
  providers: [AuthService, LocalStrategy],
  exports: [LocalStrategy, AuthService]
})
export class AuthModule {}
