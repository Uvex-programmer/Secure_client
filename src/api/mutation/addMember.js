import gql from 'graphql-tag'
export const ADD_MEMBER = gql`
  mutation addMember($groupId: String) {
    addMember(groupId: $groupId) {
      groupId
      username
    }
  }
`
