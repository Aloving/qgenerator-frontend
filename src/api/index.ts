import { authTransport, questionService } from './entities';
import { IApi } from './interfaces';
export * from './interfaces';

export const api: IApi = { authTransport, questionService };
