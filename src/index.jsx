import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';

// eslint-disable-next-line no-unused-vars
const store = configureStore();

ReactDOM.render(<Provider store={store}><Router /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
