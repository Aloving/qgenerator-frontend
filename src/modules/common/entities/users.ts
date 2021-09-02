import { authTransport, usersService } from '../../../api/entities';
import { UsersStore, UserStore } from '../../users/stores';
import { AsyncStore } from '../stores';

const asyncStore = new AsyncStore();
export const userStore = new UserStore(usersService, authTransport, asyncStore);
export const usersStore = new UsersStore();
