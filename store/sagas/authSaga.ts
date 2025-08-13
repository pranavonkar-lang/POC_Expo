// @ts-ignore
const { takeEvery, put, delay, call } = require('redux-saga/effects');
import screensPath from '@/app/screensPath';
import { authType } from './types/auth.types';
import { api } from '@/app/services/apiServices/api';
import NavigationService from '@/app/services/navigationServices';
import { loginFailure, loginSuccess } from '@/store/features/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

function* loginHandle(action: { type: string; payload: any }): Generator<any, void, any> {
  try {
    const response = yield call(api.login, action.payload);
    if(response) {
      yield put(loginSuccess(response));
      AsyncStorage.setItem('token', response.accessToken);
      NavigationService.replace(screensPath.tabs,action.payload);
    } else {
      yield put(loginFailure('Login failed'));
    }
  } catch (error) {
    console.error(error);
  }
}

export function* authSaga(): Generator {
  yield takeEvery(authType.loginRequest, loginHandle);
}