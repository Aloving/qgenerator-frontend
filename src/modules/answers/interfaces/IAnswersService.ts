import { IAnswer } from './IAnswer';
import { IAddAnswerDto } from '../dto';

export interface IAnswersService {
  likeAnswer(id: IAnswer['id']): Promise<IAnswer>;
  dislikeAnswer(id: IAnswer['id']): Promise<IAnswer>;
  editAnswer(id: IAnswer['id'], payload: Partial<IAnswer>): Promise<IAnswer>;
  deleteAnswer(id: IAnswer['id']): Promise<boolean>;
  addAnswer(payload: IAddAnswerDto): Promise<IAnswer>;
}
