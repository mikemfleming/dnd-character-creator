import { combineReducers } from 'redux';

const initialState = {
  race: null,
};

const builder = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RACE_FULFILLED':
      return {
        ...state,
        race: action.payload,
      };
    case 'SET_SUBRACE_FULFILLED':
      return {
        ...state,
        subrace: action.payload,
      };
    default:
      return state;
  }
};

const helloReducer = combineReducers({
  builder,
});

export default helloReducer;

