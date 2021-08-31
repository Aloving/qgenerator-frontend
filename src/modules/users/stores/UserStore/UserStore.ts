import { computed, observable } from 'mobx';

import { IUsersService } from '../../services';

import { IUserStore } from './IUserStore';
import { IUser } from '../../interfaces';
import { ITokens } from '../../../authentication/interfaces';

export class UserStore implements IUserStore {
  @observable user: IUser | null = null;

  constructor(private usersService: IUsersService) {}

  setTokens(tokens: ITokens) {
    if (this.user) {
      this.user = { ...this.user, ...tokens };
    }
  }

  setRefreshToken(refreshToken: string) {
    if (this.user) {
      this.user.refreshToken = refreshToken;
    }
  }

  resetToken() {
    if (this.user) {
      this.user.refreshToken = undefined;
      this.user.accessToken = undefined;
    }
  }
}
