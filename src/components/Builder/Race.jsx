import React from 'react';
import { Link } from 'react-router-dom';

const Race = ({ onChange, race }) => {
  return (
    <div>
      <select onChange={onChange} defaultValue={race.index}>
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
      <pre>{JSON.stringify(race)}</pre>
      <Link to="/builder/class">Continue</Link>
    </div>
  );
};

export default Race;
