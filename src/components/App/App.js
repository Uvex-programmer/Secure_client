import { useQuery } from '@apollo/client'
import { GET_ALL_USERS } from '../../api/queries/getAllUsers'
import AllRoutes from './AllRoutes/AllRoutes'
import { Grid } from '@mui/material'
import Navbar from '../Navbar/Navbar'

function App() {
  const { data, loading } = useQuery(GET_ALL_USERS)

  return (
    <div>
      {loading ? '' : console.log(data)}
      <Navbar />
      <Grid container>
        <Grid item>hej</Grid>
        <Grid item>hej</Grid>
        <Grid item>hej</Grid>
      </Grid>
    </div>
  )
}

export default App
