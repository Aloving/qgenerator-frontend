import { IAuthTransport, IQuestionService } from '../interfaces';
import { IGenerateQuestionRequest, IGenerateQuestionResponse } from '../dto';
import { IQuestion } from '../../modules/question/interfaces';

export class QuestionService implements IQuestionService {
  private _httpTransport: IAuthTransport;

  constructor(httpTransport: IAuthTransport) {
    this._httpTransport = httpTransport;
  }

  getQuestion = ({
    excludeIds,
  }: IGenerateQuestionRequest): Promise<IGenerateQuestionResponse> => {
    return this._httpTransport.post<IGenerateQuestionResponse>(
      '/api/questions/generate',
      { excludeIds },
    );
  };

  increaseQuestionLikes = (questionId: number): Promise<IQuestion> => {
    return this._httpTransport.put<IQuestion>(
      `/api/questions/${questionId}/increaseLikes`,
    );
  };

  decreaseQuestionLikes = (questionId: number): Promise<IQuestion> => {
    return this._httpTransport.put<IQuestion>(
      `/api/questions/${questionId}/decreaseLikes`,
    );
  };

  increaseQuestionDislikes = (questionId: number): Promise<IQuestion> => {
    return this._httpTransport.put<IQuestion>(
      `/api/questions/${questionId}/increaseDislikes`,
    );
  };

  decreaseQuestionDislikes = (questionId: number): Promise<IQuestion> => {
    return this._httpTransport.put<IQuestion>(
      `/api/questions/${questionId}/decreaseDislikes`,
    );
  };
}
