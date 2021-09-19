import { IQuestion } from '../../interfaces';
import { IQuestionDataStore } from '../QuestionDataStore';

export interface IQuestionStore {
  readonly isDisliked: boolean;
  readonly isLiked: boolean;
  readonly data: IQuestionDataStore['data'];
  readonly isLoading: boolean;
  readonly completed: boolean;
  readonly failed: boolean;

  likeQuestion(): void;
  dislikeQuestion(): void;
  randomizeQuestion(): void;
  requestQuestion(id: IQuestion['id']): void;
}
