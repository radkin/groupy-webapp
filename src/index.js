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
import { ApolloProvider } from '@apollo/react-hooks';
import client from './graphql/client';
// material-ui
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

function Greeting() {
  // Do we have existing localStorage?
  const weHaveLocalStorage = JSON.parse(localStorage.getItem('groupy'));
  if (weHaveLocalStorage) {
    return <App />;
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
