import {persistReducer} from 'redux-persist';
import {applyMiddleware, compose, createStore} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from './reducers';

const middleware = [promise, thunk];

const persistConfig = {
  key: 'quizShow',
  storage: AsyncStorage,
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  pReducer,
  undefined,
  compose(applyMiddleware(...middleware)),
);
export default store;
