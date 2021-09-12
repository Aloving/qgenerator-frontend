import { IProposal, IProposalWithUserData } from '../../interfaces';
import { IProposeQuestionDto } from '../../dto';

export interface IProposalsService {
  acceptQuestion(proposalId: IProposal['id']): Promise<IProposalWithUserData>;
  declineQuestion(proposalId: IProposal['id']): Promise<IProposalWithUserData>;
  getAllQuestionProposals(): Promise<IProposalWithUserData[]>;
  proposeQuestion(payload: IProposeQuestionDto): Promise<IProposalWithUserData>;
}
