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
    graphql: `query { user(id: "" )
                {
                  first
                  phone
                  last
                }
              }`
  },
  getMe: {
    name: 'user',
    graphql: `query getMe {
                me {
              		first
                  last
                  zipCode
                  color
                  initials
                  profileImage
                }
              }`
  },
  // EXAMPLE export const groups
}
