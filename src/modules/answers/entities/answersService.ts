import { AnswersService } from '../services';

import { authTransport } from '../../common/entities';

export const answersService = new AnswersService(authTransport);
