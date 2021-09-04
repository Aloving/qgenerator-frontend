import { ICreateQuestionDto } from '../../../common/dto';

export interface IQuestionsStore {
  requestQuestion(questionId: number): void;
  randomizeQuestion(): void;
  createQuestion(payload: ICreateQuestionDto): void;
}
