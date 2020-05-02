/* eslint no-undef: 0 */
import React, { Suspense } from 'react';
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
import { Welcome as WelcomeView } from './views';
// requirements for cookies
import Cookies from 'universal-cookie';
// import axios from 'axios';

const cookies = new Cookies();

function App() {
  const state = {
    token: cookies.get('groupy')
  }
  // console.log('state is ', state);
  // if no groupy cookie create one
  if (state.token) {
    console.log('no token found');
    console.log('requesting token');
    // axios.post('http://localhost:4000/sendVerification/4157605061')
    //   .then((response) => {
    // console.log('response', response);
    return (
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading... </div>}>
          <WelcomeView />
        </Suspense>
      </ThemeProvider>
    )
    // });
  } else {
    console.log('token is ', state.token);
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
// axios.get('https://api.github.com/users/mapbox')
//   .then((req) => {
//     console.log(response.data);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//     console.log(response.config);
//
//     const cookies = new Cookies();
//     const token = req.body.token || req.query.token || req.headers['x-access-token'];
//     console.log(`token is ${token}`);
//
//     cookies.set('groupy', 'test entry', { path: '/' });
//     console.log(cookies.get('groupy')); // test entry
//   });

export default App;
