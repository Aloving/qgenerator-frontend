import { IAnswer, IQuestion } from '../../question';
import { Role } from '../enums';

export interface IUser {
  id: string;
  login: string;
  answers?: IAnswer[];
  questions?: IQuestion[];
  role: Role;
  email: string;
}
