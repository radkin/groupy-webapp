import React from 'react';
import ReactDOM from 'react-dom';
import MockTheme from '../testComponents/MockTheme';
import Main from '../Main';
// Apollo requirements
import { ApolloProvider } from '@apollo/react-hooks';
import { createMockClient } from 'mock-apollo-client';
import { gql } from 'apollo-boost';
import * as queries from '../graphql/queries';
import me from './data';

const meQuery = gql(queries.users.getMe.graphql);

const mockClient = createMockClient();
mockClient.setRequestHandler(
  meQuery,
  () => Promise.resolve({ me })
);

test('<Main />', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ApolloProvider client={mockClient}>
      <MockTheme>
        <Main />
      </MockTheme>
    </ApolloProvider>,
    div
  );
});
