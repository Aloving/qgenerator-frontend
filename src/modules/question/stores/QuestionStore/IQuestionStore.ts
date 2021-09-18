import { IQuestionDataStore } from '../QuestionDataStore';
import { IQuestion } from '../../interfaces';

export interface IQuestionStore {
  isDisliked: boolean;
  isLiked: boolean;
  data: IQuestionDataStore['data'];
  isLoading: boolean;
  completed: boolean;

  likeQuestion(): void;
  dislikeQuestion(): void;
  randomizeQuestion(): void;
  requestQuestion(id: IQuestion['id']): void;
}
