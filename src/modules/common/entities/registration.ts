import { RegistrationStore } from '../../authentication';
import { usersService } from '../../../api/entities';
import { AsyncStore } from '../stores';
import { userStore, usersStore } from './users';

const asyncStore = new AsyncStore();

export const registrationStore = new RegistrationStore(
  usersStore,
  userStore,
  usersService,
  asyncStore,
);
