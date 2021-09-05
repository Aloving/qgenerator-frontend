import { authTransport } from '../../../api/entities';
import { AuthenticationStore } from '../../authentication';
import { navigator } from '../utils/navigator';
import { AsyncStore } from '../stores';
import { userStore } from './users';

const asyncStore = new AsyncStore();

export const authenticationStore = new AuthenticationStore(
  userStore,
  authTransport,
  asyncStore,
  navigator,
);
