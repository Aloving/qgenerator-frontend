import { IAnswer, IQuestion } from '../../question';
import { IProposal } from '../../proposals';
import { Role } from '../enums';

export interface IUser {
  id: string;
  login: string;
  answers?: IAnswer[];
  questions?: IQuestion[];
  questionProposals?: IProposal[];
  role: Role;
  email: string;
}
