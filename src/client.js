// import ApolloClient, { createNetworkInterface } from 'apollo-client'

// const networkInterface = createNetworkInterface({ uri: '/graphql' })

import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const dataIdFromObject = (result) => {
  if (result.id && result.__typename) {
    return result.__typename + result.id;
  }

  return null;
}


// const client = new ApolloClient({
//   networkInterface,
//   dataIdFromObject,
// })

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:3000/graphql'
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true,
  dataIdFromObject,
})

export default apolloClient

// export default client
