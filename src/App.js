/* eslint no-undef: 0 */
import React from 'react';
import { HashRouter } from 'react-router-dom';
import GridNexus from './gridNexus';
// apollo
import { ApolloProvider } from '@apollo/react-hooks';
import client from './graphql/client';


function App() {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <div>
          <GridNexus />
        </div>
      </HashRouter>
    </ApolloProvider>
  )
}


export default App;
