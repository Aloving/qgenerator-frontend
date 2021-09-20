import { IAuthTransport } from '../../../../api';
import { IUser, IUsersService } from '../../interfaces';
import { ICreateUserDto } from '../../dto';

export class UsersService implements IUsersService {
  private _httpTransport: IAuthTransport;
  private API_URL = '/api/users';

  constructor(httpTransport: IAuthTransport) {
    this._httpTransport = httpTransport;
  }

  findUserByLogin = (login: string) => {
    return this._httpTransport.get<IUser>(`${this.API_URL}/${login}`);
  };

  createUser = async (payload: ICreateUserDto) => {
    return this._httpTransport.post<IUser>(`${this.API_URL}/create`, payload);
  };

  getAllUsers = (): Promise<IUser[]> => {
    return this._httpTransport.get<IUser[]>(`${this.API_URL}`);
  };
}
