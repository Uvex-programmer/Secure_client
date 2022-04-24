import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useUrlId } from '../../store/UrlContext'

const GroupBox = ({ group }) => {
  const urlCtx = useUrlId();
  const navigate = useNavigate()
  return (
    <Paper
      sx={{ width: '100%', margin: '2px' }}
      onClick={() => {
        urlCtx.setGroupId(group.id)
        navigate(`/group/${group.id}`)
      }
      }
    >
      <Grid container height={90} padding={1}>
        <Grid item md={12}>
          <Typography>{group.name}</Typography>
        </Grid>
        <Grid item md={12}>
          {group.isPrivate ? 'Private' : 'Public'}
        </Grid>
        <Grid item md={12}>
          Members: {group.totalMembers}
        </Grid>
      </Grid>
    </Paper>
  )
}

export default GroupBox
