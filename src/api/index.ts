import { IApi } from './interfaces';

import { authTransport, questionService, usersService } from './entities';

export * from './interfaces';
export const api: IApi = {
  authTransport,
  questionService,
  usersService,
};
