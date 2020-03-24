/*
import React from 'react'
import ReactDOM from 'react-dom'
import { configure } from 'mobx'

import GetmeList from './GetmeList'
import uiState from './uiState'
import * as serviceWorker from './serviceWorker';
import Gdrawer from './gdrawer';

configure(true)

// 'response meta tag' for mobile compatibility
const headElement =
  <meta
    content="initial-scale=1, minimum-scale=1, width=device-width"
    name="viewport"
  />;

// DOM render tree

// 'responsive meta tag'
ReactDOM.render(headElement, document.getElementById('root'));

// getme apollo client observer
ReactDOM.render(
  <GetmeList uiState={uiState} />,
  document.getElementById('root')
)

ReactDOM.render(<Gdrawer />, document.querySelector('#root'));

// serviceWorker for offline and load faster
serviceWorker.unregister();

*/

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);
