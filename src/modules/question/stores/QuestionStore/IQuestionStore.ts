import { IQuestion } from '../../interfaces';

export interface IQuestionStore {
  isDisliked: boolean;
  isLiked: boolean;
  isLoading: boolean;
  questionData: IQuestion | null;

  likeQuestion(): void;
  dislikeQuestion(): void;
  requestQuestion(): void;
}
