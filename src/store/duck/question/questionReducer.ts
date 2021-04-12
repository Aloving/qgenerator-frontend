import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { questionActions } from './actions';

import { IQuestionState } from './interfaces';

const initialState: IQuestionState = {
  randomizer: {
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
  questions: {
    liked: [],
    disliked: [],
  },
};

export const questionReducer = combineReducers({
  data: createReducer(initialState.randomizer.data).handleAction(
    questionActions.fetchQuestionSuccess,
    (state, action) => action.payload,
  ),
  isLoading: createReducer(initialState.randomizer.isLoading)
    .handleAction(questionActions.fetchQuestionRequest, () => true)
    .handleAction(questionActions.fetchQuestionSuccess, () => false)
    .handleAction(questionActions.fetchQuestionFailure, () => false),
  hasError: createReducer(initialState.randomizer.hasError).handleAction(
    questionActions.fetchQuestionFailure,
    () => true,
  ),
  liked: createReducer(initialState.questions.liked).handleAction(
    questionActions.setLiked,
    (state, action) => action.payload,
  ),
  disliked: createReducer(initialState.questions.disliked).handleAction(
    questionActions.setDisliked,
    (state, action) => action.payload,
  ),
});
