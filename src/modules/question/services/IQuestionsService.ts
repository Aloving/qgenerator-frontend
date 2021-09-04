import { IRandomizeQuestionRequest, IRandomizeQuestionResponse } from '../dto';
import { IQuestion } from '../index';
import { ICreateQuestionDto } from '../../common/dto';

export interface IQuestionsService {
  create(payload: ICreateQuestionDto): Promise<IQuestion>;
  randomizeQuestion(
    payload: IRandomizeQuestionRequest,
  ): Promise<IRandomizeQuestionResponse>;
  getQuestion(questionId: number): Promise<IQuestion>;

  increaseQuestionLikes(questionId: number): Promise<IQuestion>;
  decreaseQuestionLikes(questionId: number): Promise<IQuestion>;

  increaseQuestionDislikes(questionId: number): Promise<IQuestion>;
  decreaseQuestionDislikes(questionId: number): Promise<IQuestion>;
}
