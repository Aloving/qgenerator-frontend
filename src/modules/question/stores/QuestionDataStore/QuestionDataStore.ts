import { action, observable, makeAutoObservable, computed } from 'mobx';

import { IQuestionDataStore } from './IQuestionDataStore';
import { IQuestion } from '../../interfaces';
import { ILikesStore } from '../../../common/stores/LikesStore';

export class QuestionDataStore implements IQuestionDataStore {
  private readonly initialState = {
    id: -1,
    commentariesCount: 0,
    likes: 0,
    dislikes: 0,
    author: {
      id: '',
      avatar: '',
      name: '',
    },
    answers: [],
    text: '',
  };
  @observable isLoading = false;
  @observable error = false;
  @observable completed = false;
  @observable data: IQuestion = this.initialState;

  constructor(private likesStore: ILikesStore) {
    makeAutoObservable(this);
  }

  get questionId() {
    return this.data?.id || -1;
  }

  private transformData(data: IQuestion): IQuestion {
    return { ...this.initialState, ...data };
  }

  @computed get isLiked() {
    return this.likesStore.isLiked(this.questionId);
  }

  @computed get isDisliked() {
    return this.likesStore.isDisliked(this.questionId);
  }

  @action
  likeQuestion = () => {
    return this.likesStore.like(this.questionId);
  };

  @action
  dislikeQuestion = () => {
    return this.likesStore.dislike(this.questionId);
  };

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
    this.data = this.transformData(data);
  };

  @action
  increaseLikes = () => {
    this.data && this.data.likes++;
  };

  @action
  decreaseLikes = () => {
    this.data && this.data.likes--;
  };

  @action
  increaseDislikes = () => {
    this.data && this.data.dislikes++;
  };

  @action
  decreaseDislikes = () => {
    this.data && this.data.dislikes--;
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
