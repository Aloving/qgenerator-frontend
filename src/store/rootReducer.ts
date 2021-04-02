import { combineReducers } from 'redux';

import { questionReducer } from './duck/question/question';

export const rootReducer = combineReducers({
  question: questionReducer,
});
