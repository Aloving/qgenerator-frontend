import { IAnswer, IQuestion } from '../../question';
import { Role } from '../enums';

export interface IUser {
  login: string;
  answers?: IAnswer[];
  questions?: IQuestion[];
  role: Role;
  email: string;

  refreshToken?: string;
  accessToken?: string;
}
