import { IQuestionStore } from '../../../question/stores/QuestionStore';
import { IAuthenticationStore } from '../../../authentication';
import { IRegistrationStore } from '../../../authentication';
import { IUserStore } from '../../../users/stores';

export class RootStore {
  constructor(
    readonly questionStore: IQuestionStore,
    readonly authenticationStore: IAuthenticationStore,
    readonly registrationStore: IRegistrationStore,
    readonly userStore: IUserStore,
  ) {}
}
