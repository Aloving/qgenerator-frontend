import { createAction, createReducer } from '@reduxjs/toolkit';

import { IQuestion, IQuestionState } from '../interfaces';

const initialState: IQuestionState = {
  isLoading: false,
  error: false,
  data: null,
};

export const PREFIX = 'QUESTION';

const FETCH_QUESTION_REQUEST = `${PREFIX}//FETCH_QUESTION_REQUEST`;
const FETCH_QUESTION_SUCCESS = `${PREFIX}//FETCH_QUESTION_SUCCESS`;
const FETCH_QUESTION_FAILURE = `${PREFIX}//FETCH_QUESTION_FAILURE`;

export const questionActionTypes = {
  FETCH_QUESTION_REQUEST,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_FAILURE,
};

const fetchQuestionRequest = createAction(FETCH_QUESTION_REQUEST);
const fetchQuestionSuccess = createAction<IQuestion>(FETCH_QUESTION_SUCCESS);
const fetchQuestionFailure = createAction(FETCH_QUESTION_FAILURE);

export const questionActions = {
  fetchQuestionRequest,
  fetchQuestionSuccess,
  fetchQuestionFailure,
};

export const questionReducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(questionActions.fetchQuestionRequest, (state) => ({
      ...state,
      isLoading: true,
    }))
    .addCase(questionActions.fetchQuestionSuccess, (state, action) => ({
      ...state,
      error: false,
      completed: true,
      data: action.payload,
    }))
    .addCase(questionActions.fetchQuestionFailure, (state) => ({
      ...state,
      error: true,
    }))
    .addDefaultCase((state) => state);
});
