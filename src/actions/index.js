export const HELLO_WORLD = 'HELLO_WORLD';
export const RESET = 'RESET';

export const setRace = () => {
  console.log('setting race')
	return {
		type: 'SET_RACE',
    payload: 1,
	};
};
