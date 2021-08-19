import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('registration')
export class UsersRegistrController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  registration(@Body() body): boolean {
    if ( this.usersService.verifyUsername(body.username) ) {
        return false;
    } else {
        return this.usersService.registrUser(body.username, body.password, body.email);
    }

    // return `Username ${body.username} Password ${body.password} email ${body.email}`
  }
}