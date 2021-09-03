import { IAsyncStore } from '../../../common/stores';
import { IUser } from '../../interfaces';

export interface IUserStore {
  async: IAsyncStore | null;
  user: IUser | null;

  completeUser(payload: IUser): void;
  setUser(payload: IUser): void;
}
