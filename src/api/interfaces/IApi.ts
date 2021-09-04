import { IAuthTransport } from './IAuthTransport';
import { IQuestionsService } from '../../modules/question/services';
import { IUsersService } from '../../modules/users';

export interface IApi {
  authTransport: IAuthTransport;
  questionsService: IQuestionsService;
  usersService: IUsersService;
}
