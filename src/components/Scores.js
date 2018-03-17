import React from 'react';
import { Link } from 'react-router-dom';

const Scores = () => {
  return (
    <div>
      <h1>Roll your ability scores</h1>
      <p>fancy dice rollin animations</p>
      <Link to="/builder/background">Continue</Link>
    </div>
  );
};

export default Scores;
