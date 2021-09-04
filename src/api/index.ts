import { IApi } from './interfaces';

import { authTransport, questionsService, usersService } from './entities';

export * from './interfaces';
export const api: IApi = {
  authTransport,
  questionsService,
  usersService,
};
