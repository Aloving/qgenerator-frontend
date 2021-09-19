import { IUser } from '../../interfaces';

export interface IUsersStore {
  readonly registeredUser: IUser | null;

  setRegisteredUser(payload: IUser): void;
}
