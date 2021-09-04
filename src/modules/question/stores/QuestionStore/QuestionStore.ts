import { computed } from 'mobx';
import { History } from 'history';

import { IQuestionsService } from '../../services';
import { IQuestionDataStore } from '../QuestionDataStore';
import { IQuestionStore } from './IQuestionStore';

export class QuestionStore implements IQuestionStore {
  constructor(
    private questionService: IQuestionsService,
    private history: History,
    private questionDataStore: IQuestionDataStore,
  ) {}

  @computed get isLiked() {
    return this.questionDataStore.isLiked;
  }

  @computed get isDisliked() {
    return this.questionDataStore.isDisliked;
  }

  @computed get data() {
    return this.questionDataStore.data;
  }

  @computed get isLoading() {
    return this.questionDataStore.isLoading;
  }

  @computed get completed() {
    return this.questionDataStore.completed;
  }

  async likeQuestion() {
    try {
      if (!this.isLiked && !this.isDisliked) {
        this.questionDataStore.increaseLikes();

        await this.questionService.increaseQuestionLikes(
          this.questionDataStore.questionId,
        );
      }

      if (this.isDisliked) {
        this.questionDataStore.decreaseDislikes();
        this.questionDataStore.increaseLikes();

        await this.questionService.decreaseQuestionDislikes(
          this.questionDataStore.questionId,
        );
        await this.questionService.increaseQuestionLikes(
          this.questionDataStore.questionId,
        );
      }

      if (this.isLiked) {
        this.questionDataStore.decreaseLikes();

        await this.questionService.decreaseQuestionLikes(
          this.questionDataStore.questionId,
        );
      }

      this.questionDataStore.likeQuestion();
    } catch (e) {
      // the catch flow
    }
  }

  async dislikeQuestion() {
    try {
      if (!this.isLiked && !this.isDisliked) {
        this.questionDataStore.increaseDislikes();

        await this.questionService.increaseQuestionLikes(
          this.questionDataStore.questionId,
        );
      }

      if (this.isLiked) {
        this.questionDataStore.decreaseLikes();
        this.questionDataStore.increaseDislikes();

        await this.questionService.decreaseQuestionLikes(
          this.questionDataStore.questionId,
        );
        await this.questionService.increaseQuestionDislikes(
          this.questionDataStore.questionId,
        );
      }

      if (this.isDisliked) {
        this.questionDataStore.decreaseDislikes();

        await this.questionService.decreaseQuestionDislikes(
          this.questionDataStore.questionId,
        );
      }

      this.questionDataStore.dislikeQuestion();
    } catch (e) {
      // the catch flow
    }
  }
}
