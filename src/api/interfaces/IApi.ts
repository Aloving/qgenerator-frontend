import { IAuthTransport } from './IAuthTransport';
import { IQuestionService } from '../../modules/question/services';
import { IUsersService } from '../../modules/users';

export interface IApi {
  authTransport: IAuthTransport;
  questionService: IQuestionService;
  usersService: IUsersService;
}
