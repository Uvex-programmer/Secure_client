import { Route, Routes } from 'react-router-dom'
import { Divider, Loader } from 'semantic-ui-react'
import Login from '../../../pages/LoginPage/login'
import NoMatchRoute from '../noMatchRoute'

const AllRoutes = () => {
  if (false) {
    return (
      <>
        <Divider hidden className='small' />
        <Loader active inline='centered' className='transparent'></Loader>
        <Divider hidden className='small' />
      </>
    )
  }

  return (
    <Routes>
      <Route exact path={process.env.REACT_APP_HOME_URL} element={<Login />} />
      <Route path='*' element={<NoMatchRoute />} />
    </Routes>
  )
}

export default AllRoutes
