import AllRoutes from './AllRoutes/AllRoutes'
import GroupBar from './GroupBar/GroupBar'
import { Grid, Typography } from '@mui/material'
import Navbar from '../Navbar/Navbar'
import MemberBar from '../GroupPages/MemberBar'

function App() {
  return (
    <Grid container height='100%'>
      <Grid item minWidth={'100%'} maxHeight={'62px'}>
        <Navbar />
      </Grid>
      <Grid item md={2} minWidth={300} bgcolor='gray' minHeight='100%'>
        <GroupBar />
      </Grid>
      <Grid item>hej</Grid>
      <Grid item>
        <MemberBar />
      </Grid>
    </Grid>
  )
}

export default App
