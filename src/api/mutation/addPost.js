import gql from 'graphql-tag'
export const ADD_POST = gql`
  mutation addNewPostToGroup(
    $groupId: String
    $username: String
    $text: String
  ) {
    addNewPostToGroup(groupId: $groupId, username: $username, text: $text) {
      username
      text
      id
      updatedAt
    }
  }
`
