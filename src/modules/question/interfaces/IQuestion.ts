export interface IQuestion {
  id: number;
  likes: number;
  dislikes: number;
  commentariesCount: number;
  author: {
    id: string;
    avatar: string;
    name: string;
  };
  questionText: string;
}
