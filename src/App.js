/* eslint no-undef: 0 */
import React, { Suspense, Component } from 'react';
import { Root, Routes } from 'react-static';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Main from './Main';
// apollo
import { ApolloProvider } from '@apollo/react-hooks';
import client from './graphql/client';
// material-ui
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
// Custom
import { EditMyProfile as EditMyProfileView } from './views';
import { Setup as SetupView } from './views';
import { CreateGroup as CreateGroupView } from './views';
import { UpcomingEvents as UpcomingEventsView } from './views';
import { Messages as MessagesView } from './views';
import { JoinGroup as JoinGroupView } from './views';

class App extends Component {
  render() {
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
                    <Main />
                  </Route>
                  <Route
                    component={EditMyProfileView}
                    path="/editmyprofile"
                  />
                  <Route
                    component={SetupView}
                    path="/setup"
                  />
                  <Route
                    component={CreateGroupView}
                    path="/creategroup"
                  />
                  <Route
                    component={JoinGroupView}
                    path="/joingroup"
                  />
                  <Route
                    component={UpcomingEventsView}
                    path="/upcomingevents"
                  />
                  <Route
                    component={MessagesView}
                    path="/messages"
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
}

export default App;
