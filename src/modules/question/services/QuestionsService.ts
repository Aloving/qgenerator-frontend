import { IAuthTransport } from '../../../api';
import { ICreateQuestionDto } from '../../common/dto';
import { IQuestion } from '../interfaces';
import { IRandomizeQuestionResponse, IRandomizeQuestionRequest } from '../dto';
import { IQuestionsService } from './IQuestionsService';

export class QuestionsService implements IQuestionsService {
  private _httpTransport: IAuthTransport;

  constructor(httpTransport: IAuthTransport) {
    this._httpTransport = httpTransport;
  }

  create = (payload: ICreateQuestionDto): Promise<IQuestion> => {
    return this._httpTransport.post<IQuestion>(
      '/api/questions/create',
      payload,
    );
  };

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
