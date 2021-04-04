import { combineReducers } from 'redux';

import { questionReducer } from './duck/question';

export const rootReducer = combineReducers({
  question: questionReducer,
});
