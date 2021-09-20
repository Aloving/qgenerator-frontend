import { ICreateUserDto } from '../../users/dto';
import { IAsyncStore } from '../../common/stores';

export interface IRegistrationStore {
  readonly async: IAsyncStore | null;

  registration(payload: ICreateUserDto): void;
}
