import { action, makeAutoObservable, observable } from 'mobx';

import { IUsersService } from '../../services';

import { IUserStore } from './IUserStore';
import { IUser } from '../../interfaces';
import { ITokens } from '../../../authentication';
import { IAsyncStore } from '../../../common/stores';
import { AsyncStatus } from '../../../common/enum';
import { IAuthTransport } from '../../../../api';

export class UserStore implements IUserStore {
  @observable user: IUser | null = null;
  readonly async: IAsyncStore | null = null;

  constructor(
    private usersService: IUsersService,
    private authTransport: IAuthTransport,
    private asyncStore: IAsyncStore,
  ) {
    makeAutoObservable(this);
    this.async = asyncStore;
  }

  @action
  completeUser(payload: IUser) {
    this.setUser(payload);
    this.async?.setStatus(AsyncStatus.Success);
  }

  @action
  setTokens(tokens: ITokens) {
    if (this.user) {
      this.user = { ...this.user, ...tokens };
    }
  }

  @action
  setUser(payload: IUser) {
    this.user = payload;
  }
}
