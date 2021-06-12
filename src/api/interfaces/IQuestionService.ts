import { IGenerateQuestionResponse, IGenerateQuestionRequest } from '../dto';
import { IQuestion } from '../../modules/question';

export interface IQuestionService {
  getQuestion(
    payload: IGenerateQuestionRequest,
  ): Promise<IGenerateQuestionResponse>;

  increaseQuestionLikes(questionId: number): Promise<IQuestion>;
  decreaseQuestionLikes(questionId: number): Promise<IQuestion>;

  increaseQuestionDislikes(questionId: number): Promise<IQuestion>;
  decreaseQuestionDislikes(questionId: number): Promise<IQuestion>;
}
