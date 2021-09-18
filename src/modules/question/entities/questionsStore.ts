import { AsyncStore, LikesStore } from '../../common/stores';
import { QuestionsStore, QuestionStore, QuestionDataStore } from '../stores';
import { questionsService } from './questionsService';
import { navigator } from '../../common/utils/navigator';

const likesStore = new LikesStore();
const questionDataStore = new QuestionDataStore(likesStore);
export const questionStore = new QuestionStore(
  questionsService,
  questionDataStore,
  navigator,
);

const createAsyncStore = new AsyncStore();
const loadingQuestionsStore = new AsyncStore();
export const questionsStore = new QuestionsStore(
  questionsService,
  createAsyncStore,
  loadingQuestionsStore,
);
