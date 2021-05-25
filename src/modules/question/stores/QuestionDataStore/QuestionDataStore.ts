import { action, observable, makeAutoObservable } from 'mobx';

import { IQuestionDataStore } from './IQuestionDataStore';
import { IQuestion } from '../../interfaces';

export class QuestionDataStore implements IQuestionDataStore {
  @observable isLoading = false;
  @observable error = false;
  @observable completed = false;
  @observable data: IQuestion | null = null;
  @observable excludeIds: number[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get questionId() {
    return this.data?.id || -1;
  }

  @action
  setLoading = () => {
    this.isLoading = true;
  };

  @action
  resetLoading = () => {
    this.isLoading = false;
  };

  @action
  setError = () => {
    this.error = true;
  };

  @action
  resetError = () => {
    this.error = false;
  };

  @action
  setCompleted = () => {
    this.completed = true;
  };

  @action
  resetCompleted = () => {
    this.completed = false;
  };

  @action
  setData = (data: IQuestion) => {
    this.data = data;
  };

  @action
  preRequestQuestionActions = () => {
    this.setLoading();
  };

  @action
  requestQuestionSuccess = (data: IQuestion) => {
    this.resetLoading();
    this.resetError();
    this.setData(data);
  };

  @action
  requestQuestionError = () => {
    this.resetLoading();
    this.setError();
  };
}
