import {
  questionReducer,
  questionActions,
  PREFIX,
  questionActionTypes,
} from './question';

import { IQuestion, IQuestionState } from '../interfaces';

const initialState: IQuestionState = {
  isLoading: false,
  error: false,
  data: null,
};

describe('question ducks', () => {
  describe('Actions', () => {
    it('should check returned action creators', () => {
      const expectedActionsList = {
        fetchQuestionRequest: expect.any(Function),
        fetchQuestionSuccess: expect.any(Function),
        fetchQuestionFailure: expect.any(Function),
      };

      expect(expectedActionsList).toEqual(questionActions);
    });

    it('should check return action types', () => {
      const expectedActionsList = {
        FETCH_QUESTION_REQUEST: `${PREFIX}//FETCH_QUESTION_REQUEST`,
        FETCH_QUESTION_SUCCESS: `${PREFIX}//FETCH_QUESTION_SUCCESS`,
        FETCH_QUESTION_FAILURE: `${PREFIX}//FETCH_QUESTION_FAILURE`,
      };

      expect(expectedActionsList).toEqual(questionActionTypes);
    });
  });

  describe('reducer', () => {
    describe('Dispatch wrong action', () => {
      it('should return initial state by default', () => {
        const expectedData = questionReducer(initialState, { type: '' });

        expect(expectedData).toEqual(initialState);
      });
    });

    describe('fetchQuestionRequest', () => {
      it('should switch isLoading to true', () => {
        const expectedData = questionReducer(
          initialState,
          questionActions.fetchQuestionRequest,
        );
        const inputData = { ...initialState, isLoading: true };
        expect(expectedData).toEqual(inputData);
      });
    });

    describe('fetchQuestionSuccess', () => {
      it('should set question to data', () => {
        const question: IQuestion = {
          id: 1,
          likes: 1,
          dislikes: 1,
          commentariesCount: 1,
          author: {
            id: '1',
            avatar: '1',
            name: '1',
          },
          answers: [],
          questionText: '1',
        };

        const expectedData = questionReducer(
          initialState,
          questionActions.fetchQuestionSuccess(question),
        );
        const inputData = {
          ...initialState,
          error: false,
          completed: true,
          data: question,
        };

        expect(expectedData).toEqual(inputData);
      });
    });

    describe('fetchQuestionFailure', () => {
      it('should switch error to true', () => {
        const expectedData = questionReducer(
          initialState,
          questionActions.fetchQuestionFailure,
        );
        const inputData = { ...initialState, error: true };

        expect(expectedData).toEqual(inputData);
      });
    });
  });
});
