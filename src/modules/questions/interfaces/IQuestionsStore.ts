import { ICreateQuestionDto } from '../../common/dto';
import { IQuestion } from '../../question/interfaces';
import { IAsyncStore } from '../../common/stores';

export interface IQuestionsStore {
  readonly questions: IQuestion[];
  readonly loading: IAsyncStore;

  createQuestion(payload: ICreateQuestionDto): void;
  loadQuestions(): void;
  removeQuestion(questionId: IQuestion['id']): void;
}
