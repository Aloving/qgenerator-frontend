import { all } from 'redux-saga/effects';

import { questionRooSaga } from '../modules/question';

export const rootSaga = function* () {
  yield all([questionRooSaga()]);
};
