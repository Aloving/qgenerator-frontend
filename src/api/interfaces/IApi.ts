import { IAuthTransport } from './IAuthTransport';
import { IQuestionService } from './IQuestionService';

export interface IApi {
  authTransport: IAuthTransport;
  questionService: IQuestionService;
}
