export const HELLO_WORLD = 'HELLO_WORLD';
export const RESET = 'RESET';
export const SET_RACE = 'SET_RACE';

export const setRace = raceId => fetch(`/api/race/${raceId}`)
  .then(data => data.json())
  .then(response => ({
    type: SET_RACE,
    payload: response.payload,
  }));
