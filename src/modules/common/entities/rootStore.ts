import { RootStore } from '../stores';
import {
  authenticationStore,
  registrationStore,
} from '../../authentication/entities';
import { questionsStore, questionStore } from '../../question/entities';
import { questionProposalsStore } from '../../proposals/entities';
import { userStore } from '../../users';

export const rootStore = new RootStore(
  questionStore,
  questionsStore,
  questionProposalsStore,
  authenticationStore,
  registrationStore,
  userStore,
);
