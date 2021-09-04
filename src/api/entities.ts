import { HttpTransport } from './httpTransport';
import { AuthTransport } from './authTransport';
import { QuestionsService } from '../modules/question/services';
import { UsersService } from '../modules/users';

export const authTransport = new AuthTransport({
  httpTransport: new HttpTransport(),
  window,
});

export const questionsService = new QuestionsService(authTransport);
export const usersService = new UsersService(authTransport);
