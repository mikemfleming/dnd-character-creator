import React from 'react';
import { Link } from 'react-router-dom';

const Race = ({ onChange, race }) => (
  <div>
    <select onChange={onChange} defaultValue={(race ? race.index : 0)}>
      <option value="0">Pick a Race</option>
      <option value="1">Dwarf</option>
      <option value="2">Elf</option>
      <option value="3">Halfling</option>
      <option value="4">Human</option>
      <option value="5">Dragonborn</option>
      <option value="6">Gnome</option>
      <option value="7">Half-Elf</option>
      <option value="8">Half-Orc</option>
      <option value="9">Tiefling</option>
    </select>
    {
        !race
          ? null
          : (
            <div>
              {
                Object.keys(race).map(key => (
                  <div>
                    <h2>{key}</h2>
                    <p>{JSON.stringify(race[key])}</p>
                  </div>
                  ))
              }
            </div>
          )
      }
    <Link to="/builder/class">Continue</Link>
  </div>
);

export default Race;
