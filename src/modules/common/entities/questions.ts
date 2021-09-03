import { api } from '../../../api';
import { QuestionStore } from '../../question/stores/QuestionStore';
import { QuestionDataStore } from '../../question/stores';
import { LikesStore } from '../stores';
import { history } from './history';

const likesStore = new LikesStore();
const questionDataStore = new QuestionDataStore(likesStore);
export const questions = new QuestionStore(
  api.questionService,
  history,
  questionDataStore,
);
