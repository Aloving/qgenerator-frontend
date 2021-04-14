import { HttpTransport } from './httpTransport';
import { AuthTransport } from './authTransport';
import { TestService, QuestionService } from './services';

export const authTransport = new AuthTransport({
  httpTransport: new HttpTransport(),
  window,
});

export const testService = new TestService(authTransport);
export const questionService = new QuestionService(authTransport);
