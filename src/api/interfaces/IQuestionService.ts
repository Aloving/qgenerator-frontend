import { IGenerateQuestionResponse, IGenerateQuestionRequest } from '../dto';
import { IQuestion } from '../../modules/question';

export interface IQuestionService {
  getQuestion(
    payload: IGenerateQuestionRequest,
  ): Promise<IGenerateQuestionResponse>;

  likeQuestion(questionId: number): Promise<IQuestion>;
}
