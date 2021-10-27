import { AnswersStore } from '../store';
import { AsyncStore } from '../../common/stores/AsyncStore';

import { questionService } from '../../question/entities';
import { answersService } from './answersService';

const loading = new AsyncStore();
export const answersStore = new AnswersStore(
  loading,
  answersService,
  questionService,
);
