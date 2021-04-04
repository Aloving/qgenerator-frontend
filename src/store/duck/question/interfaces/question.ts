import { IAnswer } from './answer';

export interface IQuestion {
  id: number;
  text: string;
  likes: number;
  dislikes: number;
  authorId: string;
  answers: Array<IAnswer>;
}
