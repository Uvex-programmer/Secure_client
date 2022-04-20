import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'

const MemberBox = ({ member }) => {

  return (
    <Paper sx={{ width: '100%' }}>
      <Grid container height={70}>
        <Grid item md={12}>
          <Typography>{member.username}</Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}


export default MemberBox