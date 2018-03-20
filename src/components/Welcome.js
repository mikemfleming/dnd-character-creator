import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <div>
    <div style={{ height: '100vh' }}>
      <h1>Making a D&D Character is Easy</h1>
      <a href="#intro">Get Started</a>
    </div>
    <div style={{ height: '100vh' }}>
      <h1 id="intro">All you have to do is:</h1>
      <ul>
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

