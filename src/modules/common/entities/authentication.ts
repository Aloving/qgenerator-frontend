import { userStore } from './users';
import { AuthenticationStore } from '../../authentication';
import { authTransport } from '../../../api/entities';
import { AsyncStore } from '../stores';
import { history } from './history';
import { usersService } from '../../../api/entities';

const asyncStore = new AsyncStore();

export const authenticationStore = new AuthenticationStore(
  userStore,
  authTransport,
  asyncStore,
  usersService,
  history,
);
