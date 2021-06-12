import { IQuestion } from '../../modules/question';

export interface IRandomizeQuestionRequest {
  excludeIds: number[];
}

export interface IRandomizeQuestionResponse {
  excludeIds: number[];
  question: IQuestion;
}
