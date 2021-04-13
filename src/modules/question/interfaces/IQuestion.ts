import { IAuthor } from './IAuthor';
import { IAnswer } from './IAnswer';

export interface IQuestion {
  id: number;
  likes: number;
  dislikes: number;
  commentariesCount: number;
  author: IAuthor;
  answers: IAnswer[];
  questionText: string;
}
