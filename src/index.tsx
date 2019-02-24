import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';


import './shared/assets/css/extra.css';
import './shared/assets/css/font-awesome.min.css';
import './shared/assets/css/main.css';
import './shared/assets/css/noscript.css';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
