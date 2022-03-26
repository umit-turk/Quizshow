import {SET_NAME} from './actionTypes';

const initialState = {
  person: {},
};

export default function statesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NAME:
      return state;
    default:
      return state;
  }
}
