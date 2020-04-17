/* eslint no-undef: 0 */
import React, { Suspense } from 'react';
import { Root, Routes } from 'react-static';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import GridNexus from './gridNexus';
// apollo
import { ApolloProvider } from '@apollo/react-hooks';
import client from './graphql/client';
// material-ui
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
// Custom
import { EditMyProfile as EditMyProfileView } from './views';
import { Setup as SetupView } from './views';

function App() {
  return (
    <Root>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<div>Loading... </div>}>
            <BrowserRouter>
              <Switch>
                <Route
                  exact
                  path="/"
                >
                  <GridNexus />
                </Route>
                <Route
                  component={EditMyProfileView}
                  path="/editmyprofile"
                />
                <Route
                  component={SetupView}
                  path="/setup"
                />
                <Route component={() => (<div>404 Not found </div>)} />
                <Route render={() => <Routes />} />
              </Switch>
            </BrowserRouter>
          </Suspense>
        </ThemeProvider>
      </ApolloProvider>
    </Root>
  )
}


export default App;
