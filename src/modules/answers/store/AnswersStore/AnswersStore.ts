import { action, makeAutoObservable, observable } from 'mobx';

import { IAnswer, IAnswersService, IAnswersStore } from '../../interfaces';
import { IAddAnswerDto } from '../../dto';
import { IAsyncStore } from '../../../common/interfaces';
import { AsyncStatus } from '../../../common/enum';
import { IQuestion, IQuestionService } from '../../../question/interfaces';

export class AnswersStore implements IAnswersStore {
  @observable answers: IAnswer[] = [];
  @observable currentQuestionId = -1;

  constructor(
    public readonly loading: IAsyncStore,
    private answersService: IAnswersService,
    private questionService: IQuestionService,
  ) {
    makeAutoObservable(this);
  }

  loadAnswers = async (id: IQuestion['id']) => {
    try {
      this.loading.setStatus(AsyncStatus.Loading);

      const answers = await this.questionService.loadAnswers(id);

      this.setAnswers(answers, id);
      this.loading.setStatus(AsyncStatus.Success);
    } catch (e) {
      this.loading.setStatus(AsyncStatus.Failed);
    }
  };

  editAnswer = async (id: IAnswer['id'], payload: Partial<IAnswer>) => {
    try {
      this.loading.setStatus(AsyncStatus.Loading);

      const updatedAnswer = await this.answersService.editAnswer(id, payload);

      this.updateAnswer(updatedAnswer);
      this.loading.setStatus(AsyncStatus.Success);
    } catch (e) {
      this.loading.setStatus(AsyncStatus.Failed);
    }
  };

  addAnswer = async (payload: IAddAnswerDto) => {
    try {
      this.loading.setStatus(AsyncStatus.Loading);

      const newAnswer = await this.answersService.addAnswer(payload);

      this.pushAnswer(newAnswer);
      this.loading.setStatus(AsyncStatus.Success);
    } catch (e) {
      this.loading.setStatus(AsyncStatus.Failed);
    }
  };

  deleteAnswer = async (id: IAnswer['id']) => {
    try {
      this.loading.setStatus(AsyncStatus.Loading);

      const deleted = await this.answersService.deleteAnswer(id);

      if (deleted) {
        this.removeAnswer(id);
      }

      this.loading.setStatus(AsyncStatus.Success);
    } catch (e) {
      this.loading.setStatus(AsyncStatus.Failed);
    }
  };

  @action
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  likeAnswer(id: IAnswer['id']) {}

  @action
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dislikeAnswer(id: IAnswer['id']) {}

  @action
  setAnswers(answers: IAnswer[], id: IQuestion['id']) {
    this.setCurrentQuestionId(id);
    this.answers = answers;
  }

  @action
  private setCurrentQuestionId(id: IQuestion['id']) {
    this.currentQuestionId = id;
  }

  @action
  private updateAnswer(updatedAnswer: IAnswer) {
    this.answers = this.answers.map((answer) =>
      answer.id === updatedAnswer.id ? { ...answer, ...updatedAnswer } : answer,
    );
  }

  @action
  private pushAnswer(answer: IAnswer) {
    this.answers = [answer, ...this.answers];
  }

  @action
  private removeAnswer(answerId: IAnswer['id']) {
    this.answers = this.answers.filter((answer) => answer.id !== answerId);
  }
}
