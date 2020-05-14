/* eslint no-undef: 0 */

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Root, Routes } from 'react-static';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import localStorage from 'localStorage';
// custom
import App from './App';
import { Welcome as WelcomeView } from './views';
// apollo
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink
} from 'apollo-boost';
import { persistCache as PersistCache } from 'apollo-cache-persist';
import { ApolloProvider } from '@apollo/react-hooks';
// material-ui
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

const init = async () => {
  const server = process.env.REACT_APP_GROUPY_GRAPHQL_SERVER;
  const port = process.env.REACT_APP_PORTNUM;
  // set up protocol
  let transferProtocol = 'https';
  if (process.env.REACT_APP_PORTNUM) {
    transferProtocol = 'http';
  }
  // persist cache in Apollo
  const cache = new InMemoryCache();
  const persistCache = new PersistCache({
    cache,
    storage: window.localStorage,
  });
  // prep client with token
  let token = 'undefined';
  const ls = await JSON.parse(localStorage.getItem('groupy'));
  if (ls) { token = ls.token; }

  const client = new ApolloClient({
    cache: cache,
    persistCache: persistCache,
    link: new ApolloLink((operation, forward) => {
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : '',
        }
      });
      return forward(operation);
    }).concat(
      new HttpLink({
        uri: `${transferProtocol}://${server}:${port}/graphql`,
        credentials: 'same-origin',
        resolvers: {},
      })
    ),
  });

  const Greeting = () => {
    // Do we have existing localStorage?
    const weHaveLocalStorage = JSON.parse(localStorage.getItem('groupy'));
    if (weHaveLocalStorage) {
      return (
        <Root>
          <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
              <Suspense fallback={<div>Loading... </div>}>
                <App />
              </Suspense>
            </ThemeProvider>
          </ApolloProvider>
        </Root>
      );
    }
    return (
      <Root>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <Suspense fallback={<div>Loading... </div>}>
              <BrowserRouter>
                <Switch>
                  <Route
                    component={WelcomeView}
                    path="/"
                  />
                  <Route component={() => (<div>404 Not found </div>)} />
                  <Route render={() => <Routes />} />
                </Switch>
              </BrowserRouter>
            </Suspense>
          </ThemeProvider>
        </ApolloProvider>
      </Root>
    );
  }

  ReactDOM.render(<Greeting  />, document.getElementById('root'));
  serviceWorker.unregister();

};



init();
