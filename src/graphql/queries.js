export const users = {
  getUsers: {
    name: 'users',
    graphql: `query getUsers {
                user {
                  id
                  first
                  last
                  phone
                  pushToken
                  profileImage
                  owner {
                    id
                  }
                  familyRelations {
                    toRole
                    toUser {
                      first
                    }
                  }
                  memberships {
                    group {
                      name
                    }
                  }
                }
              }`
  },
  getUser: {
    name: 'user',
    graphql: `query { user(id: "5e554d1d0ffd206a0a36d932" )
                {
                  first
                  phone
                  last
                }
              }`
  }
  // EXAMPLE export const groups
}
