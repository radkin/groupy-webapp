/* eslint no-undef: 0 */
// for testing graphQL client
// import { gql } from 'apollo-boost';
// import * as queries from './graphql/queries';

// Apollo
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink
} from 'apollo-boost';

const token = process.env.REACT_APP_GROUPY_TOKEN;

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      }
    });
    return forward(operation);
  }).concat(
    new HttpLink({
      uri: 'http://localhost:4000/graphql',
      credentials: 'same-origin',
      resolvers: {},
    })
  ),
});

export default apolloClient

/*
// for testing graphQL client
const userQuery = gql(queries.users.getUser.graphql);
let user = {};
// define client
client
  .query({
    query: userQuery
  })
  .then(result => {
    // console.log(result)
    // console.log(`first:${result.data.user[0].first}`);
    user = {
      first: result.data.user[0].first,
      last: result.data.user[0].last,
      phone: result.data.user[0].phone,
    }
    console.log('USER IS', user);
  });
// testing graphQL client
*/
