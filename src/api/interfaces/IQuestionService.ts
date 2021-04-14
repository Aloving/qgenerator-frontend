import { IQuestion } from '../../modules/question/interfaces';

export interface IQuestionService {
  getQuestion(): Promise<IQuestion>;
}
