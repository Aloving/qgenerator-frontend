import { usersService } from '../../../api/entities';
import { UsersStore, UserStore } from '../../users/stores';

export const userStore = new UserStore(usersService);
export const usersStore = new UsersStore();
