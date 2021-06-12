import { LikesStore } from '../stores/LikesStore';
import { QuestionDataStore } from '../../question/stores';

export const likesStore = new LikesStore();

export const questionDataStore = new QuestionDataStore(likesStore);
