import { Module } from '@nestjs/common';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { AccountsModule } from './accounts/accounts.module';
import { AuthModule } from './auth/auth.module';
import { ClientsModule } from './clients/clients.module';
import { AuthGuard } from './common/auth.guard';
import { RoleGuard } from './common/role.guard';
import { ValidationPipe } from './common/validation.pipe';
import { InvoicesModule } from './invoices/invoices.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { Account } from './accounts/entities/account.entity';
import { Client } from './clients/entities/client.entity';
import { Invoice } from './invoices/entities/invoice.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'commerce',
      entities: [User,Account,Client,Invoice],
      synchronize: true,
    }),
    AuthModule, ClientsModule, AccountsModule, InvoicesModule, UsersModule],
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
