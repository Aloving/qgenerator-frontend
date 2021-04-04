import { IQuestion } from './index';

export interface IQuestionState {
  question: {
    isLoading: boolean;
    hasError: boolean;
    data: IQuestion;
  };
}
