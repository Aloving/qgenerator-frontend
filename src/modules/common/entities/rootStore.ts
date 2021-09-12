import { RootStore } from '../stores';
import { authenticationStore, registrationStore } from '../../authentication';
import { questionsStore, questionStore } from '../../question';
import { userStore } from '../../users';

export const rootStore = new RootStore(
  questionStore,
  questionsStore,
  authenticationStore,
  registrationStore,
  userStore,
);
