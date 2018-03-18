export const HELLO_WORLD = 'HELLO_WORLD';
export const RESET = 'RESET';
export const SET_RACE = 'SET_RACE';

export const setRace = raceId => ({
  type: 'SET_RACE',
  payload: fetch(`/api/races/${raceId}`)
    .then(data => data.json())
    .then(json => json.payload),
});
