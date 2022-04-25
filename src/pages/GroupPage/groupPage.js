import React, { useEffect, useState } from 'react'
import { Grid, Typography, Container } from '@mui/material'
import { GET_SINGLE_GROUP_BY_ID } from '../../api/queries/getSingleGroupById';
import { useQuery } from '@apollo/client'
import { useUrlId } from '../../store/UrlContext';
import GroupPostCard from '../../components/GroupPages/GroupPostCard';

const GroupPage = () => {
  const urlCtx = useUrlId();
  const { data, loading } = useQuery(GET_SINGLE_GROUP_BY_ID, {
    variables: {
      "groupId": urlCtx.groupId
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
        {!loading &&
          data?.findSingleGroupById.name}
      </Typography>
      <Grid container>
        {loading && <h1>loading</h1>}
        {!loading &&
          data?.findSingleGroupById.name &&
          data.findSingleGroupById.groupPosts.map((pst, idx) => {
          
            return <GroupPostCard key={idx} post={pst} />
          })}
      </Grid>
    </Container>
  )
}

export default GroupPage