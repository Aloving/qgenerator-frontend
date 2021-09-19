import { action, makeAutoObservable, observable } from 'mobx';

import { AsyncStatus } from '../../../common/enum';

import { ITokens } from '../../../authentication';
import { IAsyncStore } from '../../../common/stores';
import { IUser } from '../../interfaces';
import { IUserStore } from './IUserStore';

export class UserStore implements IUserStore {
  @observable user: IUser | null = null;

  constructor(public readonly async: IAsyncStore) {
    makeAutoObservable(this);
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
