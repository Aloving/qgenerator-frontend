import { IAuthTransport } from './IAuthTransport';
import { IQuestionService } from '../../modules/question/services/IQuestionService';

export interface IApi {
  authTransport: IAuthTransport;
  questionService: IQuestionService;
}
