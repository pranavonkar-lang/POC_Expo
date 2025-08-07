import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
// @ts-ignore
const ReduxSaga = require('redux-saga');

import badgeReducer from '@/store/features/badgeSlice';
import authReducer from '@/store/features/authSlice';
import rootSaga from './sagas';

const sagaMiddleware = ReduxSaga.default();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['badge','auth'],
};

const rootReducer = combineReducers({
  badge: badgeReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;










// // store/index.ts
// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { combineReducers } from 'redux';
// import badgeReducer from '@/store/features/badgeSlice';

// import rootSaga from './sagas';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['badge'],
// };

// const rootReducer = combineReducers({
//   badge: badgeReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
//   });
  
  
// export const persistor = persistStore(store);
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
  
// import createSagaMiddleware from 'redux-saga';
// import createSagaMiddleware from '@redux-saga/core';

// const sagaMiddleware = createSagaMiddleware();

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       thunk: false,
//       serializableCheck: false,
//     }).concat(sagaMiddleware),
// });

// sagaMiddleware.run(rootSaga);