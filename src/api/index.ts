import { IApi } from './interfaces';

import { authTransport, questionService } from './entities';

export * from './interfaces';
export const api: IApi = { authTransport, questionService };
