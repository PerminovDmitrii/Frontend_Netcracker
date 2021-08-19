import { Controller, Get, Param } from '@nestjs/common';
import { User } from 'src/data/users';
import { UsersService } from './users.service';

@Controller('login')
export class UsersLoginController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getProducts(@Param() param): User | false {
    return this.usersService.verifyUser(param.username, param.password);
  }
}