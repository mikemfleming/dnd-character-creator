import React from 'react';
import { Link } from 'react-router-dom';

const Race = ({ onClick, race }) => {
  console.log(onClick, race)
  return (
    <div>
      <h1>Select your race</h1>
      <pre>{JSON.stringify(race)}</pre>
      <button onClick={onClick}>bingo</button>
      <p>drop downs and shit</p>
      <Link to="/builder/class">Continue</Link>
    </div>
  );
};

export default Race;
