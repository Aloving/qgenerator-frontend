import { IApi } from '../../../api';

import { authTransport } from './authTransport';
import { usersService } from '../../users';
import { questionsService } from '../../question';
import { proposalsService } from '../../proposals';

export const api: IApi = {
  authTransport,
  questionsService,
  usersService,
  proposalsService,
};
