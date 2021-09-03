import { IUser } from '../../interfaces';

export interface IUsersStore {
  registeredUser: IUser | null;

  setRegisteredUser(payload: IUser): void;
}
