import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Tick from './Tick';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Tick />, document.getElementById('root'));
registerServiceWorker();
