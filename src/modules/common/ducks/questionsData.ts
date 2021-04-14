import { combineReducers } from 'redux';

import { createLikes } from './createLikes';

import { IQuestionsDataState } from '../interfaces';

const initialState: IQuestionsDataState = {
  likes: {
    liked: [],
    disliked: [],
  },
};

const PREFIX = 'QUESTIONS_DATA';

const { likesReducer, likesActions } = createLikes(PREFIX, initialState.likes);

export const questionsDataActions = {
  ...likesActions,
};

export const questionsDataReducer = combineReducers({
  likes: likesReducer,
});
