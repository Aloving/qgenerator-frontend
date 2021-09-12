import { navigator } from '../../common/utils/navigator';
import { AsyncStore } from '../../common/stores';
import { userStore } from '../../users';
import { authTransport } from '../../common/entities';
import { AuthenticationStore } from '../stores';

const asyncStore = new AsyncStore();

export const authenticationStore = new AuthenticationStore(
  userStore,
  authTransport,
  asyncStore,
  navigator,
);
