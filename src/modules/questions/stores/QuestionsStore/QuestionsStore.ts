import { action, makeAutoObservable, observable } from 'mobx';

import { IAsyncStore } from '../../../common/interfaces';
import { AsyncStatus } from '../../../common/enum';
import { ICreateQuestionDto } from '../../../common/dto';
import { IQuestion } from '../../../question/interfaces';
import { IQuestionsService, IQuestionsStore } from '../../interfaces';

export class QuestionsStore implements IQuestionsStore {
  @observable questions: IQuestion[] = [];

  constructor(
    private questionsService: IQuestionsService,
    private createAsync: IAsyncStore,
    public loading: IAsyncStore,
  ) {
    makeAutoObservable(this);
  }

  @action
  createQuestion = async (payload: ICreateQuestionDto) => {
    try {
      this.createAsync?.setStatus(AsyncStatus.Loading);
      const question = await this.questionsService.create(payload);

      this.pushQuestion(question);
      this.createAsync?.setStatus(AsyncStatus.Success);
    } catch (e) {
      this.createAsync?.setStatus(AsyncStatus.Failed);
    }
  };

  loadQuestions = async () => {
    try {
      this.loading.setStatus(AsyncStatus.Loading);
      const questions = await this.questionsService.getAllQuestions();

      this.setQuestions(questions);
      this.loading.setStatus(AsyncStatus.Success);
    } catch (e) {
      this.loading.setStatus(AsyncStatus.Failed);
    }
  };

  @action
  deleteQuestion = async (questionId: IQuestion['id']) => {
    try {
      this.loading.setStatus(AsyncStatus.Loading);

      const deleted = await this.questionsService.remove(questionId);

      if (deleted) {
        this.removeQuestion(questionId);
      }

      this.loading.setStatus(AsyncStatus.Success);
    } catch (e) {
      this.loading.setStatus(AsyncStatus.Failed);
    }
  };

  @action
  private removeQuestion = (questionId: IQuestion['id']) => {
    this.questions = this.questions.filter(
      (question) => question.id !== questionId,
    );
  };

  @action
  private setQuestions = (questions: IQuestion[]) => {
    this.questions = questions;
  };

  @action
  private pushQuestion = (question: IQuestion) => {
    this.questions = [...this.questions, question];
  };
}
