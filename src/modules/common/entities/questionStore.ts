import { api } from '../../../api';
import { questionDataStore } from './questionDataStore';
import { QuestionStore } from '../../question/stores/QuestionStore';

export const questionStore = new QuestionStore(
  api.questionService,
  questionDataStore,
);
