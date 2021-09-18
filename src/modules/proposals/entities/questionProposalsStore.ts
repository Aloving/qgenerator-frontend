import { AsyncStore } from '../../common/stores';
import { QuestionProposalsStore } from '../stores';
import { proposalsService } from './proposalsService';
import { questionsStore } from '../../question/entities';

const acceptingProcessAsync = new AsyncStore();
const loading = new AsyncStore();
const proposeProcessAsync = new AsyncStore();

export const questionProposalsStore = new QuestionProposalsStore(
  proposalsService,
  questionsStore,
  acceptingProcessAsync,
  loading,
  proposeProcessAsync,
);
