import { RootStore } from '../stores';
import { questions } from './questions';
import { authenticationStore } from './authentication';
import { registrationStore } from './registration';

export const rootStore = new RootStore(
  questions,
  authenticationStore,
  registrationStore,
);
