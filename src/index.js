import React from 'react'
import ReactDOM from 'react-dom'
import { configure } from 'mobx'

import GetmeList from './GetmeList'
import uiState from './uiState'
import Button from '@material-ui/core/Button';
import * as serviceWorker from './serviceWorker';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import Demo from './demo';

configure(true)

// material-ui hello world button
function App() {
  return (
    <ScopedCssBaseline>
      <Button
        color="primary"
        variant="contained"
      >
        Hello World
      </Button>
    </ScopedCssBaseline>
  );
}

// 'response meta tag' for mobile compatibility
const headElement =
  <meta
    content="initial-scale=1, minimum-scale=1, width=device-width"
    name="viewport"
  />;

/* DOM render tree */

// 'responsive meta tag'
ReactDOM.render(headElement, document.getElementById('root'));

// getme apollo client observer
ReactDOM.render(
  <GetmeList uiState={uiState} />,
  document.getElementById('root')
)

// serviceWorker for offline and load faster
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

ReactDOM.render(<Demo />, document.querySelector('#root'));

/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/
