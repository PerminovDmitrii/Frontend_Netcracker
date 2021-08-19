import { Injectable } from '@nestjs/common';
import { User } from 'src/data/users';
import { users } from 'src/data/users';


@Injectable()
export class UsersService {
  verifyUser(username: string, password: string): User | false {
    const user = users.find(elem => elem.username === username);
    if (username !== undefined) {
        return user.password === password ?  user : false;
    } else {
        return false;
    }
  }

  verifyUsername(username: string): boolean {
    const user = users.find(elem => elem.username === username);
    return user ? true : false;
  }

  registrUser(username: string, password: string, email: string): boolean {
    const user: User = {
        username,
        password,
        email,
        basket: [],
        recentlyProducts: []
    } 
    users.push(user);
    return true;
  }
}