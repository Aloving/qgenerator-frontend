import { IQuestionState } from '../interfaces';
import { questionReducer, questionActions } from './question';

const initialState: IQuestionState = {
  isLoading: false,
  error: false,
  data: null,
};

describe('reducer', () => {
  it('request', () => {
    const action = {
      type: questionActions.fetchQuestionRequest,
    };

    expect(questionReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('success', () => {
    const action = {
      type: questionActions.fetchQuestionSuccess,
      payload: {
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
      },
    };

    expect(questionReducer(initialState, action)).toEqual({
      ...initialState,
      error: false,
      completed: true,
      data: action.payload,
    });
  });

  it('failure', () => {
    const action = {
      type: questionActions.fetchQuestionFailure,
    };

    expect(questionReducer(initialState, action)).toEqual({
      ...initialState,
      error: true,
    });
  });
});
