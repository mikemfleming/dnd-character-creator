export const SET_RACE = 'SET_RACE';
export const SET_SUBRACE = 'SET_SUBRACE';

export const setRace = raceId => ({
  type: SET_RACE,
  payload: fetch(`/api/races/${raceId}`)
    .then(data => data.json())
    .then(json => json.payload),
});

export const setSubrace = subraceId => ({
  type: SET_SUBRACE,
  payload: fetch(`/api/subraces/${subraceId}`)
    .then(data => data.json())
    .then(json => json.payload),
});
