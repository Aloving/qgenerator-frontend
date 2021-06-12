import { IQuestionStore } from '../../../question/stores/QuestionStore';

export class RootStore {
  constructor(readonly questionStore: IQuestionStore) {}
}
