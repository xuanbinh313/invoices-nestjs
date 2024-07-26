import { Module } from '@nestjs/common';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { AccountsModule } from './accounts/accounts.module';
import { AuthModule } from './auth/auth.module';
import { ClientsModule } from './clients/clients.module';
import { AuthGuard } from './common/auth.guard';
import { RoleGuard } from './common/role.guard';
import { ValidationPipe } from './common/validation.pipe';

@Module({
  imports: [AuthModule, ClientsModule, AccountsModule],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard
    }
  ],
})
export class AppModule {}
