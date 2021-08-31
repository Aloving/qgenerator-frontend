import { IAuthTransport } from '../../../../api';
import { IUser } from '../../interfaces';
import { IUsersService } from './IUsersService';
import { ICreateUserDto } from '../../dto';

export class UsersService implements IUsersService {
  private _httpTransport: IAuthTransport;

  constructor(httpTransport: IAuthTransport) {
    this._httpTransport = httpTransport;
  }

  findUserByLogin = (login: string) => {
    return this._httpTransport.get<IUser>(`/api/users/${login}`);
  };

  createUser = async (payload: ICreateUserDto) => {
    return this._httpTransport.post<IUser>(`/api/users/create`, payload);
  };
}
