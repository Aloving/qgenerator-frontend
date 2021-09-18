import { IAuthor } from './IAuthor';
import { IAnswer } from './IAnswer';
import { IProposal } from '../../proposals';

export interface IQuestion {
  id: number;
  likes: number;
  dislikes: number;
  commentariesCount: number;
  author: IAuthor;
  answers: IAnswer[];
  text: string;
  proposalId?: IProposal['id'];
}
