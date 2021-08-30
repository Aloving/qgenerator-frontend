import { IAnswer, IQuestion } from '../../question';
import { Role } from '../enums';

export interface IUser {
  login: string;
  answers: IAnswer[];
  questions: IQuestion[];
  refreshToken?: string;
  password: string;
  role: Role;
  email: string;
}
