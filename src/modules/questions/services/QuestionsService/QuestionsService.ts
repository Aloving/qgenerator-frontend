import { IAuthTransport } from '../../../../api';
import {
  IRandomizeQuestionRequest,
  IRandomizeQuestionResponse,
} from '../../../question/dto';
import { IQuestion } from '../../../question/interfaces';
import { IAnswer } from '../../../answers/interfaces';
import { ICreateQuestionDto } from '../../../common/dto';
import { IQuestionsService } from '../../interfaces';

export class QuestionsService implements IQuestionsService {
  private API_URL = '/api/questions';

  constructor(private _httpTransport: IAuthTransport) {}

  create = (payload: ICreateQuestionDto): Promise<IQuestion> => {
    return this._httpTransport.post<IQuestion>(
      `${this.API_URL}/create`,
      payload,
    );
  };

  remove = async (id: IQuestion['id']) => {
    await this._httpTransport.delete(`${this.API_URL}/${id}`);

    return true;
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

  getAllQuestions = (): Promise<IQuestion[]> => {
    return this._httpTransport.get<IQuestion[]>(`/api/questions`);
  };

  loadAnswers = (id: IQuestion['id']): Promise<IAnswer[]> => {
    return this._httpTransport.get<IAnswer[]>(``);
  };
}
