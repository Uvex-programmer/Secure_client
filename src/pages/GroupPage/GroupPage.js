import React from 'react'
import { Grid, Typography, Container } from '@mui/material'
import { GET_SINGLE_GROUP_BY_ID } from '../../api/queries/getSingleGroupById'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router';
import GroupPostCard from '../../components/GroupPages/GroupPostCard'
import MemberBar from '../../components/GroupPages/Memberbar'

const GroupPage = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_SINGLE_GROUP_BY_ID, {
    variables: {
      "groupId": id
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
        {!loading && data?.findSingleGroupById.name}
      </Typography>
      <Grid container>
        <Grid item md={8}>
          {loading && <h1>loading</h1>}
          {!loading &&
            data?.findSingleGroupById.name &&
            data.findSingleGroupById.groupPosts.map((pst, idx) => {
              return (
                <GroupPostCard key={idx} post={pst} groupId={id} />
              )
            })}
        </Grid>
        <Grid item md={4} sx={{ backgroundColor: 'gray' }}>
            {!loading &&
          <MemberBar group={data.findSingleGroupById}/>
            }
        </Grid>
      </Grid>
    </Container>
  )
}

export default GroupPage
