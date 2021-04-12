import { createAsyncAction, createAction } from 'typesafe-actions';

import {
  FETCH_QUESTION_REQUEST,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_FAILURE,
  SET_LIKED,
  SET_DISLIKED,
} from './constants';

import { IQuestion } from './interfaces';

const fetchQuestion = createAsyncAction(
  FETCH_QUESTION_REQUEST,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_FAILURE,
)<string, IQuestion, Error>();

const setLiked = createAction(SET_LIKED)<IQuestion['id'][]>();
const setDisliked = createAction(SET_DISLIKED)<IQuestion['id'][]>();

export const questionActions = {
  fetchQuestionRequest: fetchQuestion.request,
  fetchQuestionSuccess: fetchQuestion.success,
  fetchQuestionFailure: fetchQuestion.failure,
  setLiked,
  setDisliked,
};
