import { action, computed } from 'mobx';

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

  @action
  likeQuestion = () => {
    this.questionDataStore.likeQuestion();
  };

  @action
  dislikeQuestion = () => {
    this.questionDataStore.dislikeQuestion();
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
