import { combineReducers } from 'redux';
import { SET_RACE } from '../actions';

let initialState = {
  race: {},
};

const api = [{ name: 'human'}, { name: 'elf' }];

const builder = (state = initialState, action) => {
	switch (action.type) {
    case SET_RACE:
			return {
        ...state,
        race: api[action.payload],
      };
		default:
			return state;
	}
};

const helloReducer = combineReducers({
	builder,
});

export default helloReducer;

