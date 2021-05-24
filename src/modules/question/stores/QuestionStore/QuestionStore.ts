import { ILikesStore } from '../../../common/stores';
import { IQuestionDataStore } from '../QuestionDataStore';
import { IQuestionStore } from './IQuestionStore';
import { IQuestionService } from '../../../../api/interfaces';
import { computed, observable } from 'mobx';
import { IQuestion } from '../../interfaces';

export class QuestionStore implements IQuestionStore {
  @computed questionData: IQuestion | null;
  @computed isLoading: boolean;

  constructor(
    private questionService: IQuestionService,
    private questionDataStore: IQuestionDataStore,
    private likesStore: ILikesStore,
  ) {
    this.questionData = this.questionDataStore.data;
    this.isLoading = this.questionDataStore.isLoading;
  }

  @computed get isLiked() {
    const questionId = this.questionDataStore.questionId;

    return this.likesStore.isLiked(questionId);
  }

  @computed get isDisliked() {
    const questionId = this.questionDataStore.questionId;

    return this.likesStore.isDisliked(questionId);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  likeQuestion = () => {};

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dislikeQuestion = () => {};

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
