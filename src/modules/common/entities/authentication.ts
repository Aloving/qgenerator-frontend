import { userStore } from './users';
import { AuthenticationStore } from '../../authentication';
import { authTransport } from '../../../api/entities';

export const authenticationStore = new AuthenticationStore(
  userStore,
  authTransport,
);
