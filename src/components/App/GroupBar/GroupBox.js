import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'

const GroupBox = ({ group }) => {
  return (
    <Paper sx={{ width: '100%' }}>
      <Grid container height={70}>
        <Grid item md={12}>
          <Typography>{group.name}</Typography>
        </Grid>
        <Grid item md={4}>
          Private: {group.isPrivate ? 'Yes' : 'No'}
        </Grid>
        <Grid item md={8}>
          Total members: {group.totalMembers}
        </Grid>
      </Grid>
    </Paper>
  )
}

export default GroupBox
