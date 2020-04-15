export const users = {
  updateUser: {
    name: 'me',
    graphql: `mutation ($id: ID!, $first: String, $last: String) {

                updateUser(id: $id, first: $first, last: $last) { initials }
              }`
  },
  // EXAMPLE export const groups
}
