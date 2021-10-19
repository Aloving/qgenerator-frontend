import { action, computed, makeAutoObservable, observable } from 'mobx';
import { History } from 'history';

import {
  restoreTokensFromStorage,
  settingsUrl,
  wait,
} from '../../../common/utils';

import { IAuthTransport } from '../../../../api';
import { IUserStore } from '../../../users/stores/';
import { IUsersService } from '../../../users';
import { IAsyncStore } from '../../../common/stores';
import { AsyncStatus } from '../../../common/enum';
import { ILoginDto } from '../../dto';
import { ITokens } from '../../interfaces';
import { IAuthenticationStore } from './IAuthenticationStore';

export class AuthenticationStore implements IAuthenticationStore {
  @observable readonly async: IAsyncStore | null = null;
  @observable tokens: ITokens | null = null;

  constructor(
    private userStore: IUserStore,
    private authTransport: IAuthTransport,
    private asyncStore: IAsyncStore,
    private userService: IUsersService,
    private history: History<unknown>,
  ) {
    makeAutoObservable(this);
    this.authTransport.onLogout(this.resetToken);

    this.async = asyncStore;
    this.onInit();
  }

  @computed get isLoggedIn() {
    return !!this.tokens?.refreshToken && !!this.tokens?.accessToken;
  }

  @action
  setTokens(tokens: ITokens) {
    this.authTransport.setTokens(tokens);
    this.tokens = tokens;
  }

  @action
  resetToken() {
    this.tokens = null;
  }

  @action
  async loadUserByToken() {
    this.async?.setStatus(AsyncStatus.Loading);

    try {
      const user = await this.authTransport.userByToken();

      this.userStore.completeUser(user);
      this.async?.setStatus(AsyncStatus.Success);
    } catch (e) {
      this.async?.setStatus(AsyncStatus.Failed);
    }
  }

  @action
  async login(payload: ILoginDto) {
    this.async?.setStatus(AsyncStatus.Loading);

    try {
      const tokens = await this.authTransport.login(payload);
      const user = await this.authTransport.userByToken();

      this.setTokens(tokens);
      this.userStore.setUser(user);
      await wait(2500);
      this.userStore.completeUser(user);
      this.history.push(settingsUrl);

      this.async?.setStatus(AsyncStatus.Success);
    } catch (e) {
      console.error(e);
      this.async?.setStatus(AsyncStatus.Failed);
      this.resetToken();
    }
  }

  async logout() {
    this.resetToken();
  }

  private onInit() {
    const tokens = restoreTokensFromStorage();
    tokens && this.setTokens(tokens);
  }
}
