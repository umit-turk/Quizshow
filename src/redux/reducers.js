import {combineReducers} from 'redux';
import statesReducer from './states/reducer';

const rootReducer = combineReducers({
  states: statesReducer,
});

export default rootReducer;
