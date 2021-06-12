import { ILikes } from '../../common/interfaces';
import { IQuestion } from './IQuestion';

interface IQuestionData {
  isLoading: boolean;
  error: boolean;
  data: IQuestion | null;
}

export interface IQuestionState {
  questionData: IQuestionData;
  likes: ILikes;
}
