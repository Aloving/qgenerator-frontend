import { IProposal } from '../../interfaces';
import { IProposeQuestionDto } from '../../dto';

export interface IQuestionProposalsStore {
  acceptProposal(payload: IProposal['id']): void;
  declineProposal(payload: IProposal['id']): void;
  loadProposals(): void;
  proposeQuestion(payload: IProposeQuestionDto): void;
}
