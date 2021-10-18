import { ICreateQuestionDto } from '../../common/dto';
import { IQuestion } from '../../question/interfaces';
import { IAnswer } from '../../answers/interfaces';
import {
  IRandomizeQuestionRequest,
  IRandomizeQuestionResponse,
} from '../../question/dto';

export interface IQuestionsService {
  create(payload: ICreateQuestionDto): Promise<IQuestion>;
  randomizeQuestion(
    payload: IRandomizeQuestionRequest,
  ): Promise<IRandomizeQuestionResponse>;
  getQuestion(questionId: number): Promise<IQuestion>;
  getAllQuestions(): Promise<IQuestion[]>;
  loadAnswers(id: IQuestion['id']): Promise<IAnswer[]>;
}
