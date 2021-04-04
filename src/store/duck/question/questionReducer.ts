import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { questionActions } from './actions';

import { IQuestionState } from './interfaces';

const initialState: IQuestionState = {
  question: {
    isLoading: false,
    hasError: false,
    data: {
      id: 0,
      text: '',
      likes: 0,
      dislikes: 0,
      authorId: '',
      answers: [],
    },
  },
};

export const questionReducer = combineReducers({
  data: createReducer(initialState.question.data).handleAction(
    questionActions.fetchQuestionSuccess,
    (state, action) => action.payload,
  ),
  isLoading: createReducer(initialState.question.isLoading)
    .handleAction(questionActions.fetchQuestionRequest, () => true)
    .handleAction(questionActions.fetchQuestionSuccess, () => false)
    .handleAction(questionActions.fetchQuestionFailure, () => false),
  hasError: createReducer(initialState.question.hasError).handleAction(
    questionActions.fetchQuestionFailure,
    () => true,
  ),
});
