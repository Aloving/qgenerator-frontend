import { api } from '../../../api';
import { questionDataStore } from './questionDataStore';
import { LikesStore } from '../stores/LikesStore';
import { QuestionStore } from '../../question/stores/QuestionStore';

export const likesStore = new LikesStore();
export const questionStore = new QuestionStore(
  api.questionService,
  questionDataStore,
  likesStore,
);
