import { IRandomizeQuestionRequest, IRandomizeQuestionResponse } from '../dto';
import { IQuestion } from '../../modules/question';

export interface IQuestionService {
  randomizeQuestion(
    payload: IRandomizeQuestionRequest,
  ): Promise<IRandomizeQuestionResponse>;
  getQuestion(questionId: number): Promise<IQuestion>;

  increaseQuestionLikes(questionId: number): Promise<IQuestion>;
  decreaseQuestionLikes(questionId: number): Promise<IQuestion>;

  increaseQuestionDislikes(questionId: number): Promise<IQuestion>;
  decreaseQuestionDislikes(questionId: number): Promise<IQuestion>;
}
