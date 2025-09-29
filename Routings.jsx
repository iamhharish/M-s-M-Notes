import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dash from './src/pages/dashboard/Dash'
import Login from './src/pages/login/Login'
import Editor from './src/pages/Editor/Editor'
const Routings = () => {
  return (
    <Routes>
      <Route path="/" element={<Dash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/editor" element={<Editor />}/>
    </Routes>
  );
}

export default Routings