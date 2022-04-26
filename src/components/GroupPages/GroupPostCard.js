import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const GroupPostCard = ({ post, groupId }) => {
  const deletePost = () => {
    console.log("delet");
    
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
      <CardActions>
        <Button size="small" onClick={() => {
          console.log(post.id,groupId);
        }}>edit post</Button>
      </CardActions>
      <CardActions>
        <Button size="small" onClick={() => {
          deletePost()
        }}>delete post</Button>
      </CardActions>
    </React.Fragment>
  );
  
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

export default GroupPostCard