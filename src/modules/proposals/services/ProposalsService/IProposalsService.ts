import { IProposal } from '../../interfaces';
import { IProposeQuestionDto } from '../../dto';

export interface IProposalsService {
  acceptQuestion(proposalId: IProposal['id']): Promise<IProposal>;
  declineQuestion(proposalId: IProposal['id']): Promise<IProposal>;
  getAllQuestionProposals(): Promise<IProposal[]>;
  proposeQuestion(payload: IProposeQuestionDto): Promise<IProposal>;
}
