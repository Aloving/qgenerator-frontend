import { AsyncStore } from '../../common/stores';
import { UsersStore, UserStore } from '../stores';

const asyncStore = new AsyncStore();
export const userStore = new UserStore(asyncStore);
export const usersStore = new UsersStore();
