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
                  id
              		first
                  last
                  zipCode
                  color
                  initials
                  profileImage
                }
              }`
  },
}

export const groups = {
  getGroups: {
    name: 'group',
    graphql: `query { getGroupSuggestions (pattern: "") {
                  id
                  name
                  zipCode
                  profileImage
                  color
                  initials
                  roles
                }
              }`
  },
}
