// store/sagas/index.ts
// @ts-ignore
const { all, fork } = require('redux-saga/effects');
import { authSaga } from '@/store/sagas/authSaga';

export default function* rootSaga() {
  yield all([fork(authSaga)]);
}
