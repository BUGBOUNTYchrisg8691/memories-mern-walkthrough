// import deps
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import reducers
import reducers from './reducers';

// import components
import App from './App';

// import styles
import './index.css';

// use compose to merge redux enhancements
// const composedEnhancements = compose(
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// 	applyMiddleware(thunk)
// );

// const store = createStore(reducers, composedEnhancements);

// create redux store w/ enhancements
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
