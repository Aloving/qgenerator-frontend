import { action, makeAutoObservable, observable } from 'mobx';

import { IAsyncStore } from './IAsyncStore';
import { AsyncStatus } from '../../enum';

export class AsyncStore implements IAsyncStore {
  @observable private status: AsyncStatus | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get isLoading() {
    return this.status === AsyncStatus.Loading;
  }

  get isFailed() {
    return this.status === AsyncStatus.Failed;
  }

  get isSucceed() {
    return this.status === AsyncStatus.Success;
  }

  @action
  setStatus(status: AsyncStatus) {
    this.status = status;
  }
}
