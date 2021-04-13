import { combineReducers } from 'redux';

import { questionsDataReducer } from '../modules/common';
import { questionReducer } from '../modules/question';

export const rootReducer = combineReducers({
  question: questionReducer,
  questionsData: questionsDataReducer,
});
