import { IProposal } from './IProposal';
import { Role } from '../../users';

export interface IProposalWithUserData extends IProposal {
  login: string;
  role: Role;
}
