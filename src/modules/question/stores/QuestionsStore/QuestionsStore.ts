import { action, observable } from 'mobx';

import { IQuestionsStore } from './IQuestionsStore';
import { IQuestionsService } from '../../services';
import { IQuestionDataStore } from '../QuestionDataStore';
import { ICreateQuestionDto } from '../../../common/dto';
import { IAsyncStore } from '../../../common/stores';
import { AsyncStatus } from '../../../common/enum';
import { INavigator } from '../../../common/interfaces';

export class QuestionsStore implements IQuestionsStore {
  @observable excludeIds: number[] = [];
  @observable createAsync: IAsyncStore | null = null;

  constructor(
    private questionsService: IQuestionsService,
    private questionDataStore: IQuestionDataStore,
    private asyncStore: IAsyncStore,
    private navigator: INavigator,
  ) {
    this.createAsync = asyncStore;
  }

  @action
  async createQuestion(payload: ICreateQuestionDto) {
    try {
      this.createAsync?.setStatus(AsyncStatus.Loading);
      await this.questionsService.create(payload);

      this.createAsync?.setStatus(AsyncStatus.Success);
    } catch (e) {
      this.createAsync?.setStatus(AsyncStatus.Failed);
    }
  }

  @action
  async requestQuestion(questionId: number) {
    const excludeIds = this.excludeIds?.includes(questionId)
      ? this.excludeIds
      : [...this.excludeIds, questionId];

    try {
      this.questionDataStore.preRequestQuestionActions();
      const question = await this.questionsService.getQuestion(questionId);

      this.questionDataStore.requestQuestionSuccess(question);
      this.excludeIds = excludeIds;
    } catch (e) {
      this.questionDataStore.requestQuestionError();
    }
  }

  async randomizeQuestion() {
    try {
      this.questionDataStore.preRequestQuestionActions();
      const {
        question,
        excludeIds,
      } = await this.questionsService.randomizeQuestion({
        excludeIds: this.excludeIds,
      });

      this.questionDataStore.requestQuestionSuccess(question);
      this.excludeIds = excludeIds;
      this.navigator.goToQuestion(question.id);
    } catch (e) {
      this.questionDataStore.requestQuestionError();
    }
  }
}
