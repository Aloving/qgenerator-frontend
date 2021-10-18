import { IAnswer } from '../../answers/interfaces';
import { IQuestion } from './IQuestion';

export interface IQuestionService {
  loadAnswers(id: IQuestion['id']): Promise<IAnswer[]>;

  increaseQuestionLikes(id: IQuestion['id']): Promise<IQuestion>;
  decreaseQuestionLikes(id: IQuestion['id']): Promise<IQuestion>;
  increaseQuestionDislikes(id: IQuestion['id']): Promise<IQuestion>;
  decreaseQuestionDislikes(id: IQuestion['id']): Promise<IQuestion>;
}
