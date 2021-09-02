import { IAsyncStore } from '../../../common/stores';
import { ILoginDto } from '../../dto';
import { ITokens } from '../../interfaces';

export interface IAuthenticationStore {
  readonly tokens: ITokens | null;
  readonly async: IAsyncStore | null;
  readonly isLoggedIn: boolean;

  loadUserByToken(): void;
  setTokens(tokens: ITokens): void;
  resetToken(): void;
  login(payload: ILoginDto): Promise<void>;
  logout(): void;
}
