import { RootStore } from '../stores/RootStore';
import { questionStore } from './questionStore';

export const rootStore = new RootStore(questionStore);
