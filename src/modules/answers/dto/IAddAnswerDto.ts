import { IUser } from '../../users/interfaces';
import { IQuestion } from '../../question/interfaces';

export interface IAddAnswerDto {
  text: string;
  questionId: IQuestion['id'];
  authorId?: IUser['id'];
}
