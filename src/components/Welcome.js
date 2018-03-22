import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <div>
    <div className="pv6 tc">
      <h1>Making a D&D character is easy.</h1>
      <h2>There are only a few steps to follow.</h2>
      <ul className="list pl0">
        <li>Select your Race</li>
        <li>Select your Class</li>
        <li>Roll your Ability Scores</li>
        <li>Select your Background</li>
        <li>Select your Gear</li>
      </ul>
      <Link to="/builder/race">Get Started</Link>
    </div>
  </div>
);

export default Welcome;

