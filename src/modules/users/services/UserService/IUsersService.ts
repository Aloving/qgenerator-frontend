import { IUser } from '../../interfaces';
import { ICreateUserDto } from '../../dto';

export interface IUsersService {
  createUser(payload: ICreateUserDto): Promise<IUser>;
  findUserByLogin(login: string): Promise<IUser>;
}
