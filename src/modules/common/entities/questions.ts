import { api } from '../../../api';
import { AsyncStore, LikesStore } from '../stores';
import {
  QuestionsStore,
  QuestionStore,
  QuestionDataStore,
} from '../../question/stores';
import { navigator } from '../utils/navigator';

const likesStore = new LikesStore();
const questionDataStore = new QuestionDataStore(likesStore);
export const question = new QuestionStore(
  api.questionsService,
  questionDataStore,
);

const createAsyncStore = new AsyncStore();
export const questions = new QuestionsStore(
  api.questionsService,
  questionDataStore,
  createAsyncStore,
  navigator,
);
