import { IAuthTransport } from '../../../../api';
import { IUser } from '../../interfaces';
import { IUsersService } from './IUsersService';

export class UsersService implements IUsersService {
  private _httpTransport: IAuthTransport;

  constructor(httpTransport: IAuthTransport) {
    this._httpTransport = httpTransport;
  }

  findUserByLogin = (login: string): Promise<IUser> => {
    return this._httpTransport.post<IUser>(`/api/users/${login}`);
  };
}
