/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
/* eslint react/no-set-state: 0 */
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
import { Welcome as WelcomeView } from './views';
// requirements for cookies
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();
const cookieExists = cookies.get('groupy');

class App extends Component {
  state = {
    loading: true,
    error: false,
    data: null
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    axios.post('http://localhost:4000/sendVerification/4157605061')
      .then(({ data }) => this.setState({
        loading: false,
        data
      }))
      .catch(err => this.setState({
        error: true
      }))
  }

  render() {
    const { loading, error, data } = this.state
    // change this to (!cookies.get('groupy')) when cookie is complete
    if (cookieExists && loading) {
      return <p>loading!</p>
    } else if (cookieExists && error) {
      return <p>error =(</p>
    } else if (cookieExists && data) {
      return <WelcomeView />
    } else { // we have the token so proceed
      console.log('token is ', this.state.cookieExists);
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
      ) // render
    }
  }
}

export default App;
