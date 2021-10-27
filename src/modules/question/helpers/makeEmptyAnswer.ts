import { IAnswer } from '../../answers/interfaces';

export const makeEmptyAnswer = ({
  id = '',
}: Partial<IAnswer> = {}): IAnswer => ({
  id,
  likes: 0,
  questionId: -1,
  dislikes: 0,
  // disliked: false,
  // liked: false,
  // avatar: '',
  authorName: '',
  // date: '',
  created: '',
  text: '',
});
