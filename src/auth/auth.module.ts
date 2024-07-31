import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AccountsModule } from 'src/accounts/accounts.module';
import { jwtConstants } from 'src/constants/jwtConstants';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '120s' },
      global: true,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
