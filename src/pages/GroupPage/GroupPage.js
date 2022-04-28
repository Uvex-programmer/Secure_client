import React, { useState, useEffect } from 'react'
import {
  Grid,
  Typography,
  Container,
  TextField,
  Box,
  Button,
  CardContent,
} from '@mui/material'
import { GET_SINGLE_GROUP_BY_ID } from '../../api/queries/getSingleGroupById'
import { ADD_MEMBER } from '../../api/mutation/addMember'
import { useQuery, useMutation } from '@apollo/client'
import { useParams } from 'react-router'
import { ADD_POST } from '../../api/mutation/addPost'
import GroupPostCard from '../../components/GroupPages/GroupPostCard'
import MemberBar from '../../components/GroupPages/Memberbar'
import { useAuth } from '../../store/AuthContext'

const GroupPage = () => {
  const { id } = useParams()
  const auth = useAuth()
  const [message, setmessage] = useState('')
  const [userExists, setUserExists] = useState(true)
  const [addPost, { error }] = useMutation(ADD_POST)
  const [addMember, { errorMember }] = useMutation(ADD_MEMBER)
  const [loader, setloader] = useState(true)
  const { data, loading } = useQuery(GET_SINGLE_GROUP_BY_ID, {
    variables: {
      groupId: id,
    },
  })

  useEffect(() => {
    setloader(true)
    const checkUser = async () => {
      var user = await auth.authenticate(id)
      user = user ? false : true
      setUserExists(user)
      setloader(false)
    }
    checkUser()
  }, [id])

  const joinGroup = () => {
    if (!auth.user) return
    addMember({
      variables: {
        groupId: id,
      },
    })
  }

  const handleMessage = () => {
    addPost({
      variables: {
        text: message,
        username: auth.user.username,
        groupId: id,
      },
    })
  }

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
      {!loader && userExists && auth.user && (
        <Button onClick={joinGroup}>Join Group</Button>
      )}
      <Grid container>
        <Grid item md={8}>
          {loading && <h1>loading</h1>}
          {!loading &&
            data?.findSingleGroupById.name &&
            data.findSingleGroupById.groupPosts.map((pst, idx) => {
              return (
                <GroupPostCard
                  key={idx}
                  post={pst}
                  groupId={id}
                  admins={data.findSingleGroupById.admins}
                  mods={data.findSingleGroupById.moderators}
                />
              )
            })}
          <CardContent>
            <h4>Create a new post</h4>
            <Box sx={{ marginTop: '1rem' }}>
              <TextField
                id='outlined-multiline-static'
                label='Enter text'
                multiline
                sx={{ width: '400px' }}
                rows={4}
                onChange={(e) => setmessage(e.target.value)}
                value={message}
              />
              <Button onClick={handleMessage} sx={{ top: 90, left: 10 }}>
                Submit
              </Button>
            </Box>
          </CardContent>
        </Grid>
        <Grid item md={4} sx={{ backgroundColor: 'gray' }}>
          {!loading && <MemberBar group={data.findSingleGroupById} />}
        </Grid>
      </Grid>
    </Container>
  )
}

export default GroupPage
