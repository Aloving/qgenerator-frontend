import { IQuestion } from '../../modules/question';

export interface IGenerateQuestionRequest {
  excludeIds: number[];
}

export interface IGenerateQuestionResponse {
  excludeIds: number[];
  question: IQuestion;
}
