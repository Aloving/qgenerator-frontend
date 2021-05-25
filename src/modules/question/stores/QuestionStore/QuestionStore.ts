import { computed } from 'mobx';

import { IQuestionService } from '../../../../api/interfaces';
import { ILikesStore } from '../../../common/stores';
import { IQuestionDataStore } from '../QuestionDataStore';
import { IQuestionStore } from './IQuestionStore';

export class QuestionStore implements IQuestionStore {
  constructor(
    private questionService: IQuestionService,
    readonly questionDataStore: IQuestionDataStore,
    private likesStore: ILikesStore,
  ) {}

  @computed get isLiked() {
    const questionId = this.questionDataStore.questionId;

    return this.likesStore.isLiked(questionId);
  }

  @computed get isDisliked() {
    const questionId = this.questionDataStore.questionId;

    return this.likesStore.isDisliked(questionId);
  }

  likeQuestion = () => {
    const questionId = this.questionDataStore.questionId;

    return this.likesStore.like(questionId);
  };

  dislikeQuestion = () => {
    const questionId = this.questionDataStore.questionId;

    return this.likesStore.dislike(questionId);
  };

  requestQuestion = async () => {
    try {
      console.log('here');
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
