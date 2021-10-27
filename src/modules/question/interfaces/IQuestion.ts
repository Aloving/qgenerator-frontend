import { IAnswer } from '../../answers/interfaces';
import { IProposal } from '../../proposals/interfaces';
import { IAuthor } from './IAuthor';

export interface IQuestion {
  id: number;
  answers: IAnswer[];
  author: IAuthor;
  commentariesCount: number;
  dislikes: number;
  likes: number;
  proposalId?: IProposal['id'];
  text: string;
}
