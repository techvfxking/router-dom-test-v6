import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Post from './Post'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route index path="/home" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route index element={<Navigate replace to={'/home'} />} />
      </Routes>
    </>
  )
}

export default App
