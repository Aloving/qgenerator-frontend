import { IQuestionDataStore } from '../QuestionDataStore';

export interface IQuestionStore {
  isDisliked: boolean;
  isLiked: boolean;
  readonly questionDataStore: IQuestionDataStore;

  likeQuestion(): void;
  dislikeQuestion(): void;
  requestQuestion(questionId: number): void;
  randomizeQuestion(): void;
}
