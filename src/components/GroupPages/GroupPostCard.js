import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const GroupPostCard = ({ post }) => {

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Updated: {post.updatedAt}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Author: {post.username}
        </Typography>
        <Typography variant="body2">
          {post.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">edit post</Button>
      </CardActions>
      <CardActions>
        <Button size="small">delete post</Button>
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