import React, { useEffect, useState } from 'react'
import { Grid, Typography, Container } from '@mui/material'
import { GET_SINGLE_GROUP_BY_ID } from '../../api/queries/getSingleGroupById';
import { useQuery } from '@apollo/client'
import MemberBox from './MemberBox';
  
const MemberBar = () => {
  const { data, loading } = useQuery(GET_SINGLE_GROUP_BY_ID, { variables: { "groupId":"625d2a60785998749bb8cced"
  }
  });

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
        {loading && <h1>loading</h1>}
        {!loading &&
          data?.findSingleGroupById.name &&
          data.findSingleGroupById.admins.map((mem, idx) => {
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
        {loading && <h1>loading</h1>}
        {!loading &&
          data?.findSingleGroupById.name &&
          data.findSingleGroupById.moderators.map((mem, idx) => {
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
        {loading && <h1>loading</h1>}
        {!loading &&
          data?.findSingleGroupById.name &&
          data.findSingleGroupById.members.map((mem, idx) => {
            return <MemberBox key={idx} member={mem}/>
          })}
      </Grid>
    </Container>
  )
}

export default MemberBar