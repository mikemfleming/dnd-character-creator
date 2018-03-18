import { combineReducers } from 'redux';
import { SET_RACE } from '../actions';
import { sendRequest } from '../../utils/request.util';

const initialState = {
  race: {},
};

const builder = (state = initialState, action) => {
  switch (action.type) {
    case SET_RACE:
      return {
        ...state,
        race: action.payload,
      };
    default:
      return state;
  }
};

const helloReducer = combineReducers({
  builder,
});

export default helloReducer;

