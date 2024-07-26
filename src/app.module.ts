import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ValidationPipe } from './common/validation.pipe';
import { APP_GUARD,APP_PIPE } from '@nestjs/core';
import { AuthGuard } from './common/auth.guard';
import { RoleGuard } from './common/role.guard';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [AuthModule, UsersModule, ProductsModule, ClientsModule],
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
