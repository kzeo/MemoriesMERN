import React from 'react'
import { Container } from '@material-ui/core'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar.js'
import Home from './components/Home/Home.js'
import Auth from './components/Auth/Auth.js'
import PostDetails from './components/PostDetails/PostDetails.jsx'

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'))

  return (
    <Router>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<Home />} />
          <Route path="/posts/search" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route
            path="/auth"
            element={!user ? <Auth /> : <Navigate to="/posts" />}
          />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
