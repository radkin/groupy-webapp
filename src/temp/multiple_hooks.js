import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const BOOKS_QUERY = ...;
const ADD_BOOK_MUTATION = ...;

function App() {
  const { loading, error, data } = useQuery(BOOKS_QUERY);
  const [addBook] = useMutation(ADD_BOOK_MUTATION, {
    variables: {
      title: 'The Shining',
      author: 'Steven King',
    },
    refetchQueries: [{ query: BOOKS_QUERY }],
  });

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <div>
      {
        data.books.map(({ id, title, author }) => (
          <div key={id}>
            "{title}" by "{author}"
          </div>
        ))
      }

      <button onClick={addBook}>
        Add book
      </button>
    </div>
  );
}

export default App;
