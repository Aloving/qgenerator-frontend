import { makeAutoObservable, observable } from 'mobx';

import { IRegistrationStore } from './IRegistrationStore';
import { AsyncStatus } from '../../../common/enum';
import { ICreateUserDto } from '../../../users/dto';
import { IAsyncStore } from '../../../common/stores';
import { IUsersStore, IUserStore } from '../../../users/stores';
import { IUsersService } from '../../../users';

export class RegistrationStore implements IRegistrationStore {
  @observable readonly async: IAsyncStore | null = null;

  constructor(
    private usersStore: IUsersStore,
    private userStore: IUserStore,
    private usersService: IUsersService,
    private asyncStore: IAsyncStore,
  ) {
    this.async = asyncStore;
    makeAutoObservable(this);
  }

  async registration(payload: ICreateUserDto) {
    this.async?.setStatus(AsyncStatus.Loading);

    try {
      const user = await this.usersService.createUser(payload);

      this.usersStore.setRegisteredUser(user);
      this.async?.setStatus(AsyncStatus.Success);
    } catch (e) {
      this.async?.setStatus(AsyncStatus.Failed);
    }
  }
}
