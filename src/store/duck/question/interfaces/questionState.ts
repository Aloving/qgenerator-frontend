import { IQuestion } from './index';

export interface IQuestionState {
  randomizer: {
    isLoading: boolean;
    hasError: boolean;
    data: IQuestion;
  };
  questions: {
    liked: IQuestion['id'][];
    disliked: IQuestion['id'][];
  };
}
