/* eslint no-undef: 0 */

// for testing graphQL client
// import { gql } from 'apollo-boost';
// import * as queries from './graphql/queries';
import Cookies from 'universal-cookie';
// Apollo
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink
} from 'apollo-boost';


// Set variables via cookie
const cookies = new Cookies();
const cookieObject = cookies.get('groupy');

var token = 'undefined';
var userID = 'undefined';

if (cookieObject) {
  console.log('cookie object is ', cookieObject);
  token = cookieObject.token;
  userID = cookieObject.userID;
} else {
  console.log('You have no cookie and that means the welcome view should \
  you to set up your profile');
}

console.log('we will use userID at some point', userID);
// const token = process.env.REACT_APP_GROUPY_TOKEN;
const server = process.env.REACT_APP_GROUPY_GRAPHQL_SERVER;
const port = process.env.REACT_APP_PORTNUM;
let transferProtocol = 'https';

if (process.env.REACT_APP_PORTNUM) {
  transferProtocol = 'http';
}

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
