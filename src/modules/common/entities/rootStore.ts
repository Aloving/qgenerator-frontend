import { RootStore } from '../stores';
import { question, questions } from './questions';
import { authenticationStore } from './authentication';
import { registrationStore } from './registration';
import { userStore } from './users';

export const rootStore = new RootStore(
  question,
  questions,
  authenticationStore,
  registrationStore,
  userStore,
);
