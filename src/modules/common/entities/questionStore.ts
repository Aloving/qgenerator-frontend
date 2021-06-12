import { api } from '../../../api';
import { questionDataStore } from './questionDataStore';
import { QuestionStore } from '../../question/stores/QuestionStore';
import { history } from './history';

export const questionStore = new QuestionStore(
  api.questionService,
  history,
  questionDataStore,
);
