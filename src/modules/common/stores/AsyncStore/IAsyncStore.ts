import { AsyncStatus } from '../../enum';

export interface IAsyncStore {
  readonly isFailed: boolean;
  readonly isSucceed: boolean;
  readonly isLoading: boolean;

  setStatus(status: AsyncStatus): void;
}
