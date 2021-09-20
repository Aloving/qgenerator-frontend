import { IAsyncStore } from '../../common/stores';
import { IUser } from './index';

export interface IUsersStore {
  readonly users: IUser[];
  readonly loading: IAsyncStore;

  loadUsers(): void;
}
