import { IApi } from '../../../api';

import { authTransport } from './authTransport';
import { usersService } from '../../users/entities';
import { proposalsService } from '../../proposals/entities';
import { questionsService } from '../../questions/entities';

export const api: IApi = {
  authTransport,
  questionsService,
  usersService,
  proposalsService,
};
