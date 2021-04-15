import { IQuestion, IQuestionState } from '../interfaces';
import {
  questionReducer,
  questionActions,
  PREFIX,
  questionActionTypes,
} from './question';

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
    it('should return initial state by default', () => {
      expect(questionReducer(initialState, { type: '' })).toEqual(initialState);
    });

    it('should switch isLoading to true', () => {
      expect(
        questionReducer(initialState, questionActions.fetchQuestionRequest),
      ).toEqual({
        ...initialState,
        isLoading: true,
      });
    });

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

      expect(
        questionReducer(
          initialState,
          questionActions.fetchQuestionSuccess(question),
        ),
      ).toEqual({
        ...initialState,
        error: false,
        completed: true,
        data: question,
      });
    });

    it('should switch error to true', () => {
      expect(
        questionReducer(initialState, questionActions.fetchQuestionFailure),
      ).toEqual({
        ...initialState,
        error: true,
      });
    });
  });
});
