import { Module } from '@nestjs/common';
import { UsersLoginController } from './users.login.controller';
import { UsersRegistrController } from './users.register.controller';
import { UsersService } from './users.service';

@Module({
    controllers: [UsersLoginController, UsersRegistrController],
    providers: [UsersService]
})
export class UsersModule {}
