import { AsyncStore } from '../../common/stores';
import { UsersStore } from '../stores';

import { usersService } from './usersService';

const asyncStore = new AsyncStore();
export const usersStore = new UsersStore(usersService, asyncStore);
