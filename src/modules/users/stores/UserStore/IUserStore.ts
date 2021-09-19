import { IAsyncStore } from '../../../common/stores';
import { IUser } from '../../interfaces';

export interface IUserStore {
  readonly async: IAsyncStore | null;
  readonly user: IUser | null;

  completeUser(payload: IUser): void;
  setUser(payload: IUser): void;
}
