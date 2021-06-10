import { IQuestion } from '../../interfaces';

export interface IQuestionDataStore {
  completed: boolean;
  data: IQuestion;
  error: boolean;
  isLoading: boolean;
  questionId: number;
  isLiked: boolean;
  isDisliked: boolean;

  likeQuestion(): void;
  dislikeQuestion(): void;
  increaseLikes(): void;
  decreaseLikes(): void;
  increaseDislikes(): void;
  decreaseDislikes(): void;
  preRequestQuestionActions(): void;
  requestQuestionError(): void;
  requestQuestionSuccess(data: IQuestion): void;
  resetCompleted(): void;
  resetError(): void;
  resetLoading(): void;
  setCompleted(): void;
  setData(data: IQuestion): void;
  setError(): void;
  setLoading(): void;
}
