import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Builder from './Builder';
import Welcome from '../components/Welcome';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/builder" component={Builder} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
	  store: PropTypes.object.isRequired,
};

export default Root;
