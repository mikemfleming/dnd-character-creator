import React from 'react';
import ReactDOM from 'react-dom';
import promise from 'redux-promise-middleware';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import helloReducer from './reducers';
import Root from './containers/Root';

const middleware = applyMiddleware(promise(), createLogger());
const store = createStore(helloReducer, middleware);

ReactDOM.render(
	<Root store={store} />,
	document.getElementById('root')
);

