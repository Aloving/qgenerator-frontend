import { IUser } from '../../interfaces';
import { ITokens } from '../../../authentication/interfaces';

export interface IUserStore {
  user: IUser | null;
  setRefreshToken(refreshToken: string): void;
  setTokens(tokens: ITokens): void;
  resetToken(): void;
}
