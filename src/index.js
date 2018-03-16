import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import helloReducer from './reducers';
import Root from './containers/Root';

let store = createStore(helloReducer);

ReactDOM.render(
	<Root store={store} />,
	document.getElementById('root')
);

