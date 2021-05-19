import { IAnswer } from '../interfaces/IAnswer';

export const makeEmptyAnswer = (): IAnswer => ({
  id: -1,
  likes: 0,
  dislikes: 0,
  disliked: false,
  liked: false,
  avatar: '',
  authorName: '',
  time: '',
  text: '',
});
