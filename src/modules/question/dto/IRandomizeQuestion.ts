import { IQuestion } from '../index';

export interface IRandomizeQuestionRequest {
  excludeIds: number[];
}

export interface IRandomizeQuestionResponse {
  excludeIds: number[];
  question: IQuestion;
}
