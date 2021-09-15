import { RootStore } from '../stores';
import {
  authenticationStore,
  registrationStore,
} from '../../authentication/entities';
import { questionsStore, questionStore } from '../../question/entities';
import { userStore } from '../../users';

export const rootStore = new RootStore(
  questionStore,
  questionsStore,
  authenticationStore,
  registrationStore,
  userStore,
);
