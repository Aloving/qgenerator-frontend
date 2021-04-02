export interface IQuestion {
  text: string;
  likes: number;
  dislikes: number;
  authorId: string;
  id: number;
  // TODO: fix it
  answer: Array<any>;
}
