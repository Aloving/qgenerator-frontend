import { IQuestionDataStore } from '../QuestionDataStore';

export interface IQuestionStore {
  isDisliked: boolean;
  isLiked: boolean;
  data: IQuestionDataStore['data'];
  isLoading: boolean;
  completed: boolean;

  likeQuestion(): void;
  dislikeQuestion(): void;
}
