import {
  IAuthenticationStore,
  IRegistrationStore,
} from '../../../authentication';
import { IUserStore } from '../../../users';
import { IQuestionStore, IQuestionsStore } from '../../../question';
import { IQuestionProposalsStore } from '../../../proposals/stores';

export class RootStore {
  constructor(
    readonly questionStore: IQuestionStore,
    readonly questionsStore: IQuestionsStore,
    readonly questionProposalsStore: IQuestionProposalsStore,
    readonly authenticationStore: IAuthenticationStore,
    readonly registrationStore: IRegistrationStore,
    readonly userStore: IUserStore,
  ) {}
}
