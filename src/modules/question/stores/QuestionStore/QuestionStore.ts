import { computed } from 'mobx';

import { IQuestionService } from '../../../../api/interfaces';
import { IQuestionDataStore } from '../QuestionDataStore';
import { IQuestionStore } from './IQuestionStore';

export class QuestionStore implements IQuestionStore {
  constructor(
    private questionService: IQuestionService,
    readonly questionDataStore: IQuestionDataStore,
  ) {}

  @computed get isLiked() {
    return this.questionDataStore.isLiked;
  }

  @computed get isDisliked() {
    return this.questionDataStore.isDisliked;
  }

  likeQuestion = async () => {
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
  };

  dislikeQuestion = async () => {
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
  };

  requestQuestion = async () => {
    try {
      this.questionDataStore.preRequestQuestionActions();
      const { question } = await this.questionService.getQuestion({
        excludeIds: [],
      });

      this.questionDataStore.requestQuestionSuccess(question);
    } catch (e) {
      this.questionDataStore.requestQuestionError();
    }
  };
}
