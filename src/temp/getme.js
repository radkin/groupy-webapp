import createQueryObservable from './createQueryObservable'
import gql from 'graphql-tag';

const GETME_QUERY = gql`
  query getMe {
    me {
      id
      phone
    }
  }
`

export default createQueryObservable({ query: GETME_QUERY})
