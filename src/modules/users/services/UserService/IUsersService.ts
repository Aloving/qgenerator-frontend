import { IUser } from '../../index';

export interface IUsersService {
  findUserByLogin(login: string): Promise<IUser>;
}
