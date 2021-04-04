import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { questionActions } from './actions';

import { QuestionState } from './interfaces';

const initialState: QuestionState = {
  question: {
    isLoading: false,
    hasError: false,
    data: {
      text: '',
      likes: 0,
      dislikes: 0,
      authorId: '',
      id: 0,
      answer: [],
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
