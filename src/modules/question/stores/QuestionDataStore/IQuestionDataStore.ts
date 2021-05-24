import { IQuestion } from '../../interfaces';

export interface IQuestionDataStore {
  completed: boolean;
  data: IQuestion | null;
  error: boolean;
  isLoading: boolean;
  questionId: number;

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
