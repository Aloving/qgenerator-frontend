import { ProposalStatus } from '../enums';

export interface IProposal {
  id: string;
  authorId: string;
  text: string;
  status: ProposalStatus;
}
