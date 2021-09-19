import { AsyncStore } from '../../common/stores';
import { questionsService } from '../../question/entities';
import { QuestionsStore } from '../stores';

const createAsyncStore = new AsyncStore();
const loadingQuestionsStore = new AsyncStore();
export const questionsStore = new QuestionsStore(
  questionsService,
  createAsyncStore,
  loadingQuestionsStore,
);
