import { authTransport } from '../../common/entities';
import { UsersService } from '../services';

export const usersService = new UsersService(authTransport);
