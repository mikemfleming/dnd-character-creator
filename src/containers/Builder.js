import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Race from '../components/Race';
import Class from '../components/Class';
import Scores from '../components/Scores';
import Background from '../components/Background';
import Gear from '../components/Gear';

export default class Builder extends Component {
    constructor (props) {
      super(props);
      this.state = {};
    }

    render () {
      return (
        <Router>
          <Switch>
            <Route path="/builder/race" component={Race} />
            <Route path="/builder/class" component={Class} />
            <Route path="/builder/scores" component={Scores} />
            <Route path="/builder/background" component={Background} />
            <Route path="/builder/gear" component={Gear} />
          </Switch>
        </Router>
      )
    }
};
