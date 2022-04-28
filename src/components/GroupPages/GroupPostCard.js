import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useMutation } from '@apollo/client'
import { REMOVE_POST_FROM_GROUP } from '../../api/mutation/removePostFromGroup'
import { useAuth } from '../../store/AuthContext'

const GroupPostCard = ({ post, groupId, admins, mods }) => {
  const [removePost, { error }] = useMutation(REMOVE_POST_FROM_GROUP);
  const auth = useAuth();
  const username = auth.user.username;
  const correctUser = () => {
    if (post.username === username) return true;
    const admin = admins.filter((user) => user.username === username)
    const moderators = mods.filter((user) => user.username === username)
    return (moderators.length > 0 || admin.length > 0) ? true : false;
  }

  const deletePost = () => {
    removePost({
      variables: {
        groupId: groupId,
        postId: post.id
      }
    });

  }

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom variant="body2">
          Posted: {post.updatedAt}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary" variant="body2">
          Author: {post.username}
        </Typography>
        <Typography variant="body2">
          {post.text}
        </Typography>
      </CardContent>

      {correctUser() && <>
        <CardActions>
          <Button size="small" onClick={() => {
            console.log(post.id, groupId);
          }}>edit post</Button>
        </CardActions>
        <CardActions>
          <Button size="small" onClick={() => {
            deletePost()
          }}>delete post</Button>
        </CardActions></>
      }
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

export default GroupPostCard