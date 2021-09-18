import { ProposalStatus } from '../enums';
import { IQuestion } from '../../question';
import { Role } from '../../users';

export interface IProposal {
  authorId: string;
  id: string;
  login: string;
  questionId: IQuestion['id'];
  role: Role;
  status: ProposalStatus;
  text: string;
}
