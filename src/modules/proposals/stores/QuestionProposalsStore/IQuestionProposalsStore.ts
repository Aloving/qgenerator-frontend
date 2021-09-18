import { IProposal, IProposalWithUserData } from '../../interfaces';
import { IProposeQuestionDto } from '../../dto';
import { IAsyncStore } from '../../../common/stores';

export interface IQuestionProposalsStore {
  readonly proposals: IProposalWithUserData[];
  readonly loading: IAsyncStore;
  readonly proposeProcessAsync: IAsyncStore;

  acceptProposal(payload: IProposal['id']): void;
  declineProposal(payload: IProposal['id']): void;
  loadProposals(): void;
  proposeQuestion(payload: IProposeQuestionDto): void;
}