import { IQuestion } from './index';

export interface QuestionState {
  question: {
    isLoading: boolean;
    hasError: boolean;
    data: IQuestion;
  };
}
