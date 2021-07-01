import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { User } from '../user/user.model';

export interface UserState extends EntityState<User> {}

const initialState = {
    user: {}
};

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'user' })
export class UserStore extends EntityStore<UserState, User> {
  constructor() {
    super(initialState);
  }
}
