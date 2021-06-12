import { IAuthTransport, IQuestionService } from '../interfaces';
import { IRandomizeQuestionResponse, IRandomizeQuestionRequest } from '../dto';
import { IQuestion } from '../../modules/question/interfaces';

export class QuestionService implements IQuestionService {
  private _httpTransport: IAuthTransport;

  constructor(httpTransport: IAuthTransport) {
    this._httpTransport = httpTransport;
  }

  randomizeQuestion = ({
    excludeIds,
  }: IRandomizeQuestionRequest): Promise<IRandomizeQuestionResponse> => {
    return this._httpTransport.post<IRandomizeQuestionResponse>(
      '/api/questions/randomize',
      { excludeIds },
    );
  };

  getQuestion = (questionId: number): Promise<IQuestion> => {
    return this._httpTransport.get<IQuestion>(`/api/questions/${questionId}`);
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
