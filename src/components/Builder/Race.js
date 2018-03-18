import React from 'react';
import { Link } from 'react-router-dom';

const Race = ({ onChange, race }) => {
  console.log(race)
  return (
    <div>
      <h1>Select your race</h1>
      <select onChange={onChange} defaultValue={race.index}>
        <option value="0">fleb</option>
        <option value="1">Dwarf</option>
        <option value="2">Bongo</option>
      </select>
      <pre>{JSON.stringify(race)}</pre>
      <Link to="/builder/class">Continue</Link>
    </div>
  );
};

export default Race;
