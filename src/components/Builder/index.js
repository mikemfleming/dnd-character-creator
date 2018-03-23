import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Race from './Race.jsx';
import Class from '../Class';
import Scores from '../Scores';
import Background from '../Background';
import Gear from '../Gear';

export default class Builder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const MyRace = () => (
      <Race 
        onSetRace={this.props.onSetRace}
        onSetSubrace={this.props.onSetSubrace}
        race={this.props.race}
        subrace={this.props.subrace}
      />
    );
 
    return (
      <Router>
        <Switch>
          <Route path="/builder/race" component={MyRace} />
          <Route path="/builder/class" component={Class} />
          <Route path="/builder/scores" component={Scores} />
          <Route path="/builder/background" component={Background} />
          <Route path="/builder/gear" component={Gear} />
        </Switch>
      </Router>
    );
  }
}
