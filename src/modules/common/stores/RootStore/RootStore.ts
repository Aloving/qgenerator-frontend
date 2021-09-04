import { IQuestionStore, IQuestionsStore } from '../../../question';
import { IAuthenticationStore } from '../../../authentication';
import { IRegistrationStore } from '../../../authentication';
import { IUserStore } from '../../../users';

export class RootStore {
  constructor(
    readonly questionStore: IQuestionStore,
    readonly questionsStore: IQuestionsStore,
    readonly authenticationStore: IAuthenticationStore,
    readonly registrationStore: IRegistrationStore,
    readonly userStore: IUserStore,
  ) {}
}
