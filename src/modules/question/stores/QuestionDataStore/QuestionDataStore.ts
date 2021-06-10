import { action, observable, makeAutoObservable, computed } from 'mobx';

import { IQuestionDataStore } from './IQuestionDataStore';
import { IQuestion } from '../../interfaces';
import { ILikesStore } from '../../../common/stores/LikesStore';

export class QuestionDataStore implements IQuestionDataStore {
  @observable isLoading = false;
  @observable error = false;
  @observable completed = false;
  @observable data: IQuestion = {
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
  @observable excludeIds: number[] = [];

  constructor(private likesStore: ILikesStore) {
    makeAutoObservable(this);
  }

  get questionId() {
    return this.data?.id || -1;
  }

  @computed get isLiked() {
    return this.likesStore.isLiked(this.questionId);
  }

  @computed get isDisliked() {
    return this.likesStore.isDisliked(this.questionId);
  }

  @action
  likeQuestion = () => {
    if (!this.isLiked) {
      this.increaseLikes();
    }

    if (this.isLiked) {
      this.decreaseLikes();
    }

    if (this.isDisliked) {
      this.decreaseDislikes();
    }

    return this.likesStore.like(this.questionId);
  };

  @action
  dislikeQuestion = () => {
    if (this.isLiked) {
      this.decreaseLikes();
    }

    if (this.isDisliked) {
      this.decreaseDislikes();
    }

    if (!this.isDisliked) {
      this.increaseDislikes();
    }

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
    this.data = data;
  };

  @action
  increaseLikes = () => {
    this.data && this.data.likes++;
    console.log(this.completed);
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
