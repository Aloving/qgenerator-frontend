import { IQuestion } from '../../question/interfaces';

export interface IAnswer {
  id: string;
  questionId: IQuestion['id'];
  // authorName: string;
  // avatar: string;
  // created: string;
  // disliked: boolean;
  dislikes: number;
  // liked: boolean;
  likes: number;
  text: string;
}
