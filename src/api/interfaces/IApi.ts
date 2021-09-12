import { IAuthTransport } from './IAuthTransport';
import { IQuestionsService } from '../../modules/question';
import { IUsersService } from '../../modules/users';
import { IProposalsService } from '../../modules/proposals';

export interface IApi {
  authTransport: IAuthTransport;
  questionsService: IQuestionsService;
  usersService: IUsersService;
  proposalsService: IProposalsService;
}
