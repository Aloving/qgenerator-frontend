import { action } from 'mobx';

import { IUser } from '../../interfaces';
import { IUsersStore } from './IUsersStore';

export class UsersStore implements IUsersStore {
  registeredUser: IUser | null = null;

  @action
  setRegisteredUser(user: IUser) {
    this.registeredUser = user;
  }
}
