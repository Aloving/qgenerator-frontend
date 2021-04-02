import { createAsyncAction } from 'typesafe-actions';

import {
  FETCH_QUESTION_REQUEST,
  FETCH_QUESTION_COMPLETED,
  FETCH_QUESTION_FAILURE,
} from './constants';

import { IQuestion } from './interfaces';

const fetchQuestion = createAsyncAction(
  FETCH_QUESTION_REQUEST,
  FETCH_QUESTION_COMPLETED,
  FETCH_QUESTION_FAILURE,
)<boolean, IQuestion, never>();

export const questionActions = {
  fetchQuestionRequest: fetchQuestion.request,
  fetchQuestionCompleted: fetchQuestion.success,
  fetchQuestionFailure: fetchQuestion.failure,
};
