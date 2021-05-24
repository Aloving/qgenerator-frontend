import { combineReducers, createAction, createReducer } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { call, delay, getContext, takeLatest, put } from 'redux-saga/effects';

import { createLikes, defaultLikesInitialState } from '../../common/ducks';

import { IQuestion, IQuestionState } from '../interfaces';
import { IStoreState } from '../../../store';
import { IApi } from '../../../api/interfaces';
import { IGenerateQuestionResponse } from '../../../api/dto';

const initialState: IQuestionState = {
  questionData: {
    isLoading: false,
    error: false,
    data: null,
  },
  likes: defaultLikesInitialState,
};

export const PREFIX = 'QUESTION';

const FETCH_QUESTION_REQUEST = `${PREFIX}//FETCH_QUESTION_REQUEST`;
const FETCH_QUESTION_SUCCESS = `${PREFIX}//FETCH_QUESTION_SUCCESS`;
const FETCH_QUESTION_FAILURE = `${PREFIX}//FETCH_QUESTION_FAILURE`;
const INCREASE_LIKES = `${PREFIX}//INCREASE_LIKES`;
const DECREASE_LIKES = `${PREFIX}//DECREASE_DISLIKES`;
const DECREASE_DISLIKES = `${PREFIX}//DECREASE_DISLIKES`;
const INCREASE_DISLIKES = `${PREFIX}//INCREASE_LIKES`;

export const questionActionTypes = {
  FETCH_QUESTION_REQUEST,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_FAILURE,
  DECREASE_DISLIKES,
  INCREASE_LIKES,
};

const fetchQuestionRequest = createAction(FETCH_QUESTION_REQUEST);
const fetchQuestionSuccess = createAction<IQuestion>(FETCH_QUESTION_SUCCESS);
const fetchQuestionFailure = createAction(FETCH_QUESTION_FAILURE);
const increaseLikes = createAction(INCREASE_LIKES);
const decreaseLikes = createAction(DECREASE_LIKES);
const increaseDislikes = createAction(INCREASE_DISLIKES);
const decreaseDislikes = createAction(DECREASE_DISLIKES);

const selectQuestionSlice = (state: IStoreState) => state.question;
const selectQuestionDataSlice = createSelector(
  selectQuestionSlice,
  (state) => state.questionData,
);
const selectQuestionId = createSelector(
  selectQuestionDataSlice,
  (state) => state.data?.id || -1,
);
const selectQuestionLikesSlice = createSelector(
  selectQuestionSlice,
  (state) => state.likes,
);
export const selectIsQuestionLoading = createSelector(
  selectQuestionDataSlice,
  (state) => state.isLoading,
);
export const selectQuestionError = createSelector(
  selectQuestionDataSlice,
  (state) => state.error,
);
export const selectQuestionData = createSelector(
  selectQuestionDataSlice,
  (state) => state.data,
);

const { likesReducer, likesActions, likesActionTypes } = createLikes(
  PREFIX,
  initialState.likes,
);
export const likeQuestion = likesActions.like;
export const dislikeQuestion = likesActions.dislike;

export const selectIsQuestionLiked = createSelector(
  selectQuestionId,
  selectQuestionLikesSlice,
  (questionId = -1, likes) => likes.liked.includes(questionId),
);
export const selectIsQuestionDisliked = createSelector(
  selectQuestionId,
  selectQuestionLikesSlice,
  (questionId = -1, likes) => likes.disliked.includes(questionId),
);

export const questionDataReducer = createReducer(
  initialState.questionData,
  (builder) => {
    return builder
      .addCase(fetchQuestionRequest, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchQuestionSuccess, (state, action) => ({
        ...state,
        error: false,
        isLoading: false,
        completed: true,
        data: action.payload,
      }))
      .addCase(fetchQuestionFailure, (state) => ({
        ...state,
        error: true,
      }))
      .addCase(increaseLikes, (state) => ({
        ...state,
        data: state.data && {
          ...state.data,
          likes: state.data.likes + 1,
        },
      }))
      .addCase(decreaseLikes, (state) => ({
        ...state,
        data: state.data && {
          ...state.data,
          dislikes: state.data.likes - 1,
        },
      }))
      .addDefaultCase((state) => state);
  },
);

export const questionActions = {
  fetchQuestionRequest,
  fetchQuestionSuccess,
  fetchQuestionFailure,
  likeQuestion,
  dislikeQuestion,
};

export function* requestQuestion() {
  const api: IApi = yield getContext('api');

  try {
    yield delay(1200);

    const result: IGenerateQuestionResponse = yield call(
      api.questionService.getQuestion,
      {
        excludeIds: [],
      },
    );

    yield put(fetchQuestionSuccess(result.question));
  } catch (e) {
    yield put(questionActions.fetchQuestionFailure());
  }
}

// export function* likeQuestionSaga() {
//   const api: IApi = yield getContext('api');
//   const questionId = yield select((state: any) => state);
//
//   // const isQuestionLiked = yield select(selectIsQuestionLiked);
//   // const isQuestionDisliked = yield select(selectIsQuestionDisliked);
//
//   // if (!isQuestionLiked) {
//   //   yield put(increaseLikes());
//   // }
//   //
//   // if (isQuestionDisliked) {
//   //   yield put(decreaseLikes());
//   // }
//   //
//   // try {
//   //   yield call(api.questionService.likeQuestion(questionId));
//   // } catch (e) {
//   //   console.error(e);
//   // }
// }

export function* questionRooSaga() {
  yield takeLatest(questionActionTypes.FETCH_QUESTION_REQUEST, requestQuestion);
}

export const questionReducer = combineReducers({
  questionData: questionDataReducer,
  likes: likesReducer,
});
