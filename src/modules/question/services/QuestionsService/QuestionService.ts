import { IAuthTransport } from '../../../../api';
import { IQuestion, IQuestionService } from '../../interfaces';

export class QuestionService implements IQuestionService {
  private API_URL = '/api/questions';

  constructor(private _httpTransport: IAuthTransport) {}

  loadAnswers = (id: IQuestion['id']) => {
    return this._httpTransport.get(`${this.API_URL}/`);
  };

  increaseQuestionLikes = (id: IQuestion['id']): Promise<IQuestion> => {
    return this._httpTransport.put<IQuestion>(
      `${this.API_URL}/${id}/increaseLikes`,
    );
  };

  decreaseQuestionLikes = (id: IQuestion['id']): Promise<IQuestion> => {
    return this._httpTransport.put<IQuestion>(
      `${this.API_URL}/${id}/decreaseLikes`,
    );
  };

  increaseQuestionDislikes = (id: IQuestion['id']): Promise<IQuestion> => {
    return this._httpTransport.put<IQuestion>(
      `${this.API_URL}/${id}/increaseDislikes`,
    );
  };

  decreaseQuestionDislikes = (id: IQuestion['id']): Promise<IQuestion> => {
    return this._httpTransport.put<IQuestion>(
      `${this.API_URL}/${id}/decreaseDislikes`,
    );
  };
}
