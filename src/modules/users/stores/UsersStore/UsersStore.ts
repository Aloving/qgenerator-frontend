import { action, makeAutoObservable, observable } from 'mobx';

import { IAsyncStore } from '../../../common/stores';
import { AsyncStatus } from '../../../common/enum';
import { IUsersService } from '../../services';
import { IUser } from '../../interfaces';
import { IUsersStore } from '../../interfaces/IUsersStore';

export class UsersStore implements IUsersStore {
  @observable users: IUser[] = [];

  constructor(
    private usersService: IUsersService,
    public loading: IAsyncStore,
  ) {
    makeAutoObservable(this);
  }

  @action
  loadUsers = async () => {
    try {
      this.loading.setStatus(AsyncStatus.Loading);

      const users = await this.usersService.getAllUsers();

      this.setUsers(users);
      this.loading.setStatus(AsyncStatus.Success);
    } catch (e) {
      this.loading.setStatus(AsyncStatus.Failed);
    }
  };

  @action
  private setUsers = (users: IUser[]) => {
    this.users = users;
  };
}
