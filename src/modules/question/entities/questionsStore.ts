import { AsyncStore, LikesStore } from '../../common/stores';
import { navigator } from '../../common/utils/navigator';
import { QuestionStore, QuestionDataStore } from '../stores';
import { questionsService } from './questionsService';

const likesStore = new LikesStore();
const asyncStore = new AsyncStore();
const questionDataStore = new QuestionDataStore(likesStore, asyncStore);
export const questionStore = new QuestionStore(
  questionsService,
  questionDataStore,
  navigator,
);
