import { computed, observable } from 'mobx';
import { History } from 'history';

import { buildQuestionId } from '../../../common/utils/urls';

import { IQuestionService } from '../../../../api/interfaces';
import { IQuestionDataStore } from '../QuestionDataStore';
import { IQuestionStore } from './IQuestionStore';

export class QuestionStore implements IQuestionStore {
  @observable excludeIds: number[] = [];

  constructor(
    private questionService: IQuestionService,
    private history: History,
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

  requestQuestion = async (questionId: number) => {
    const excludeIds = this.excludeIds?.includes(questionId)
      ? this.excludeIds
      : [...this.excludeIds, questionId];

    try {
      this.questionDataStore.preRequestQuestionActions();
      const question = await this.questionService.getQuestion(questionId);

      this.questionDataStore.requestQuestionSuccess(question);
      this.excludeIds = excludeIds;
    } catch (e) {
      this.questionDataStore.requestQuestionError();
    }
  };

  randomizeQuestion = async () => {
    try {
      this.questionDataStore.preRequestQuestionActions();
      const {
        question,
        excludeIds,
      } = await this.questionService.randomizeQuestion({
        excludeIds: this.excludeIds,
      });

      this.questionDataStore.requestQuestionSuccess(question);
      this.excludeIds = excludeIds;
      this.history.push(buildQuestionId(question.id));
    } catch (e) {
      this.questionDataStore.requestQuestionError();
    }
  };
}
