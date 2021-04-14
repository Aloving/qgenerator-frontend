import { IQuestion } from './';

export interface IQuestionState {
  isLoading: boolean;
  error: boolean;
  data: IQuestion | null;
}
