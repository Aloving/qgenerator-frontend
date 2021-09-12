import { authTransport } from '../../common/entities';
import { ProposalsService } from '../services';

export const proposalsService = new ProposalsService(authTransport);
