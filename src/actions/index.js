export const HELLO_WORLD = 'HELLO_WORLD';
export const RESET = 'RESET';
export const SET_RACE = 'SET_RACE';

export const setRace = () => {
	return {
		type: 'SET_RACE',
    payload: 1,
	};
};
