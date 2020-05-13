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
import { persistCache as PersistCache } from 'apollo-cache-persist';
import localStorage from 'localStorage';

const server = process.env.REACT_APP_GROUPY_GRAPHQL_SERVER;
const port = process.env.REACT_APP_PORTNUM;
// set up protocol
let transferProtocol = 'https';
if (process.env.REACT_APP_PORTNUM) {
  transferProtocol = 'http';
}
// persist cache in Apollo
const cache = new InMemoryCache();
const persistCache = new PersistCache({
  cache,
  storage: window.localStorage,
});
// token
const token = localStorage.getItem('groupy');

const apolloClient = new ApolloClient({
  cache: cache,
  persistCache: persistCache,
  link: new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      }
    });
    return forward(operation);
  }).concat(
    new HttpLink({
      uri: `${transferProtocol}://${server}:${port}/graphql`,
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
