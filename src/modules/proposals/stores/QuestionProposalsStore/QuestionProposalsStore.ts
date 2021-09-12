import { makeAutoObservable, observable } from 'mobx';

import { IAsyncStore } from '../../../common/stores';
import { AsyncStatus } from '../../../common/enum';
import { IProposalsService } from '../../services';
import { IProposal, IProposalWithUserData } from '../../interfaces';
import { IProposeQuestionDto } from '../../dto';
import { IQuestionProposalsStore } from './IQuestionProposalsStore';

export class QuestionProposalsStore implements IQuestionProposalsStore {
  @observable proposals: IProposalWithUserData[] = [];

  constructor(
    private proposalsService: IProposalsService,
    private acceptingProcessAsync: IAsyncStore,
    private loading: IAsyncStore,
    private proposeProcessAsync: IAsyncStore,
  ) {
    makeAutoObservable(this);
  }

  acceptProposal = async (proposalId: IProposal['id']) => {
    this.acceptingProcessAsync.setStatus(AsyncStatus.Loading);

    try {
      const proposal = await this.proposalsService.acceptQuestion(proposalId);

      this.acceptingProcessAsync.setStatus(AsyncStatus.Success);
      this.setProposal(proposal);
    } catch (e) {
      this.acceptingProcessAsync.setStatus(AsyncStatus.Failed);
    }
  };

  declineProposal = async (proposalId: IProposal['id']) => {
    this.acceptingProcessAsync.setStatus(AsyncStatus.Loading);

    try {
      const proposal = await this.proposalsService.declineQuestion(proposalId);

      this.acceptingProcessAsync.setStatus(AsyncStatus.Success);
      this.setProposal(proposal);
    } catch (e) {
      this.acceptingProcessAsync.setStatus(AsyncStatus.Failed);
    }
  };

  loadProposals = async () => {
    this.loading.setStatus(AsyncStatus.Loading);

    try {
      const proposals = await this.proposalsService.getAllQuestionProposals();

      this.loading.setStatus(AsyncStatus.Success);
      this.resetProposals(proposals);
    } catch (e) {
      this.loading.setStatus(AsyncStatus.Failed);
    }
  };

  proposeQuestion = async (payload: IProposeQuestionDto) => {
    this.proposeProcessAsync.setStatus(AsyncStatus.Loading);

    try {
      const proposal = await this.proposalsService.proposeQuestion(payload);

      this.proposeProcessAsync.setStatus(AsyncStatus.Success);
      this.setProposal(proposal);
    } catch (e) {
      this.proposeProcessAsync.setStatus(AsyncStatus.Failed);
    }
  };

  private resetProposals = (proposals: IProposalWithUserData[] = []) => {
    this.proposals = proposals;
  };

  private setProposal = (proposalToSet: IProposalWithUserData) => {
    this.proposals = this.proposals.map((proposal) => {
      return proposal.id === proposalToSet.id ? proposalToSet : proposal;
    });
  };
}
