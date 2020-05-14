/* eslint no-undef: 0 */
import React, { Component } from 'react';
import { Routes } from 'react-static';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Main from './Main';
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
    )
  }
}

export default App;
