import { ILoginDto } from '../../dto';
import { ITokens } from '../../interfaces';

export interface IAuthenticationStore {
  readonly tokens: ITokens | null;

  setTokens(tokens: ITokens): void;
  resetToken(): void;
  login(payload: ILoginDto): Promise<void>;
  logout(): void;
}
