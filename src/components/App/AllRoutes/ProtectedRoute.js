import { Navigate } from 'react-router-dom'
import { useAuth } from '../../../store/AuthContext'
import { useState, useEffect } from 'react'

const ProtectedRoute = ({ children }) => {
  const auth = useAuth()
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const authenticate = async () => {
      const authenticated = await auth.authenticate()
      setAuthenticated(authenticated)
      setLoading(false)
    }
    authenticate()
  }, [])

  if (loading) {
    return <h1>KOLLAR SÅ DU INTE ÄR EN HACKER</h1>
  }

  if (!authenticated) {
    return <Navigate to='/' replace />
  }
  return children
}

export default ProtectedRoute
