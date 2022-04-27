import React from 'react'
import { Grid, Typography, Container } from '@mui/material'
import { GET_SINGLE_GROUP_BY_ID } from '../../api/queries/getSingleGroupById'
import { useQuery } from '@apollo/client'
import MemberBox from './MemberBox'

const MemberBar = ({ group }) => {


  return (
    <Container>
      <Typography
        variant='h5'
        align='center'
        padding={2}
        borderBottom='2px solid black'
      >
        Admins
      </Typography>
      <Grid container>
        {group?.name &&
          group.admins.map((mem, idx) => {
            return <MemberBox key={idx} member={mem} />
          })}
      </Grid>
      <Typography
        variant='h5'
        align='center'
        padding={2}
        borderBottom='2px solid black'
      >
        Moderators
      </Typography>
      <Grid container>

        {group?.name &&
          group.moderators.map((mem, idx) => {
            return <MemberBox key={idx} member={mem} />
          })}
      </Grid>
      <Typography
        variant='h5'
        align='center'
        padding={2}
        borderBottom='2px solid black'
      >
        Members
      </Typography>
      <Grid container>
        {group?.name &&
          group.members.map((mem, idx) => {
            return <MemberBox key={idx} member={mem} />
          })}
      </Grid>
    </Container>
  );
}
export default MemberBar;