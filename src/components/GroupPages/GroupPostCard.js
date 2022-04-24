import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'

const GroupPostCard = ({ post }) => {
  console.log(post);
  return (
    <Paper sx={{ width: '100%' }}>
      <Grid container height={70}>
        <Grid item md={12}>
          <Typography>{post}</Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default GroupPostCard