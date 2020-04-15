export const users = {
  updateUser: {
    name: 'me',
    graphql: `mutation ($id: ID!, $first: String) {

                updateUser(id: $id, first: $first) { initials }
              }`
  },
  // EXAMPLE export const groups
}
