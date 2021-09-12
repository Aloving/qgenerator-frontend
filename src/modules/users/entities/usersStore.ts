import { AsyncStore } from '../../common/stores';
import { UsersStore, UserStore } from '../stores';
import { usersService } from './usersService';
import { authTransport } from '../../common/entities';

const asyncStore = new AsyncStore();
export const userStore = new UserStore(usersService, authTransport, asyncStore);
export const usersStore = new UsersStore();
