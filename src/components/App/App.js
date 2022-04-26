import AllRoutes from './AllRoutes/AllRoutes'
import GroupBar from '../GroupBar/GroupBar'
import { Grid } from '@mui/material'
import Navbar from '../Navbar/Navbar'
import { useEffect } from 'react'
import { useAuth } from '../../store/AuthContext'

function App() {
  const auth = useAuth()
  useEffect(() => {
    if (auth.user) return
    auth.whoAmI()
  }, [auth.user])

  return (
    <Grid container height='100%'>
      <Grid item minWidth={'100%'} maxHeight={'62px'}>
        <Navbar />
      </Grid>
      <Grid item md={2} bgcolor='gray' minHeight='100%'>
        <GroupBar />
      </Grid>
      <Grid item md={10}>
        <AllRoutes />
      </Grid>
    </Grid>
  )
}

export default App
