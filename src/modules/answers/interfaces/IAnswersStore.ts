import { IQuestion } from '../../question/interfaces';
import { IAsyncStore } from '../../common/interfaces';
import { IAddAnswerDto } from '../dto';
import { IAnswer } from './IAnswer';

export interface IAnswersStore {
  readonly currentQuestionId: IQuestion['id'];
  readonly answers: IAnswer[];
  readonly loading: IAsyncStore;

  addAnswer(payload: IAddAnswerDto): void;
  loadAnswers(id: IQuestion['id']): void;
  deleteAnswer(id: IAnswer['id']): void;
  editAnswer(id: IAnswer['id'], payload: Partial<IAnswer>): void;
  likeAnswer(id: IAnswer['id']): void;
  dislikeAnswer(id: IAnswer['id']): void;

  setAnswers(answers: IAnswer[], id: IQuestion['id']): void;
}
