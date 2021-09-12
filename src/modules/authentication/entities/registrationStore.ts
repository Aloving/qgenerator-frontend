import { RegistrationStore } from '../stores';
import { AsyncStore } from '../../common/stores';
import { userStore, usersStore, usersService } from '../../users';

const asyncStore = new AsyncStore();

export const registrationStore = new RegistrationStore(
  usersStore,
  userStore,
  usersService,
  asyncStore,
);
