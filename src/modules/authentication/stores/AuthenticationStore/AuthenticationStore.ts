import { IAuthenticationStore } from './IAuthenticationStore';
import { IUserStore } from '../../../users/stores/UserStore/IUserStore';
import { ILoginDto } from '../../dto';
import { IAuthTransport } from '../../../../api';
import { ITokens } from '../../interfaces';
import { computed } from 'mobx';

export class AuthenticationStore implements IAuthenticationStore {
  constructor(
    private userStore: IUserStore,
    private authTransport: IAuthTransport,
  ) {
    this.authTransport.onLogout(this.resetToken);
  }

  @computed get tokens() {
    const accessToken = this.userStore.user?.accessToken;
    const refreshToken = this.userStore.user?.refreshToken;

    if (accessToken && refreshToken) {
      return {
        accessToken,
        refreshToken,
      };
    }

    return null;
  }

  setTokens(tokens: ITokens) {
    this.userStore.setTokens(tokens);
  }

  resetToken = () => {
    this.userStore.resetToken();
  };

  async login(payload: ILoginDto) {
    try {
      const tokens = await this.authTransport.login(payload);

      this.setTokens(tokens);
    } catch (e) {
      this.resetToken();
    }
  }

  async logout() {
    this.userStore.resetToken();
  }
}
