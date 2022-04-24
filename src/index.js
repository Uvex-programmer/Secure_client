import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App'
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from '@apollo/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthContextProvider } from './store/AuthContext'

const link = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URL,
  //credentials: 'include',
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <Router>
          <App />
        </Router>
      </AuthContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
