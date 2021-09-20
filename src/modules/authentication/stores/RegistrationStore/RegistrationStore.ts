import { makeAutoObservable, observable } from 'mobx';

import { AsyncStatus } from '../../../common/enum';
import { IAsyncStore } from '../../../common/stores';
import { ICreateUserDto } from '../../../users/dto';
import { IUsersStore, IUserStore } from '../../../users/stores';
import { IUsersService } from '../../../users/interfaces';
import { IRegistrationStore } from '../../interfaces';

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
      await this.usersService.createUser(payload);

      this.async?.setStatus(AsyncStatus.Success);
    } catch (e) {
      this.async?.setStatus(AsyncStatus.Failed);
    }
  }
}
