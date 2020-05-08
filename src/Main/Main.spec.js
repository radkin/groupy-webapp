import React from 'react';
import ReactDOM from 'react-dom';
import MockTheme from '../testComponents/MockTheme';
import Main from './Main';
// Apollo requirements
import { ApolloProvider } from '@apollo/react-hooks';
import client from '../graphql/client';

test('<Main />', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ApolloProvider client={client}>
      <MockTheme>
        <Main />
      </MockTheme>
    </ApolloProvider>,
    div
  );
});
