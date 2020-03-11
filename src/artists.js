import createQueryObservable from './createQueryObservable'
import gql from 'graphql-tag';

const ARTISTS_QUERY = gql`
  query artists {
    artists {
      id
      name
    }
  }
`

export default createQueryObservable({ query: ARTISTS_QUERY})
