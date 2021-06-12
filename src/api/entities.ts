import { HttpTransport } from './httpTransport';
import { AuthTransport } from './authTransport';
import { QuestionService } from './services';

export const authTransport = new AuthTransport({
  httpTransport: new HttpTransport(),
  window,
});

export const questionService = new QuestionService(authTransport);
