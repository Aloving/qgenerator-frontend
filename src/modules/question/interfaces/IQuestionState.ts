import { ILikes } from '../../common';
import { IQuestion } from './';

interface IQuestionData {
  isLoading: boolean;
  error: boolean;
  data: IQuestion | null;
}

export interface IQuestionState {
  questionData: IQuestionData;
  likes: ILikes;
}
