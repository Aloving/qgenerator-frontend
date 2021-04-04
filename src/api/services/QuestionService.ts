import { IQuestion } from '../../modules/question/interfaces';
import { IAuthTransport, IQuestionService } from '../interfaces';

export class QuestionService implements IQuestionService {
  private _httpTransport: IAuthTransport;

  constructor(httpTransport: IAuthTransport) {
    this._httpTransport = httpTransport;
  }

  getQuestion(): Promise<IQuestion> {
    return this._httpTransport.get<IQuestion>('api/questions');
  }
}
