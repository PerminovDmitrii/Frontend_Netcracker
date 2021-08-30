import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Product } from '../product.model';
import { User } from './user.model';
import { UserState, UserStore } from './user.store';

@Injectable({
  providedIn: 'root'
})
export class UserQuery extends QueryEntity<UserState, User> {

  isSigned = false;
  constructor(protected store: UserStore) {
    super(store);
  }
}
