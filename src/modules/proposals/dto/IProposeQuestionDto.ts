import { IUser } from '../../users';

export interface IProposeQuestionDto {
  text: string;
  authorId: IUser['id'];
}
