export const users = {
  updateUser: {
    name: 'me',
    graphql: `mutation ($id: ID!, $first: String, $last: String,
      $zipCode: String, $initials: String) {

                updateUser(id: $id, first: $first, last: $last,
                zipCode: $zipCode, initials: $initials) { initials }
              }`
  },
  // EXAMPLE export const groups
}
