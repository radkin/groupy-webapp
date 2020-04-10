/* eslint no-undef: 0 */
import React from 'react';
import { HashRouter } from 'react-router-dom';
import GridNexus from './gridNexus';
// apollo
import { ApolloProvider } from '@apollo/react-hooks';
import client from './graphql/client';
// material-ui
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <div>
            <GridNexus />
          </div>
        </HashRouter>
      </ThemeProvider>
    </ApolloProvider>
  )
}


export default App;
