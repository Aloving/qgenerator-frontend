export interface IQuestionsStore {
  requestQuestion(questionId: number): void;
  randomizeQuestion(): void;
}
