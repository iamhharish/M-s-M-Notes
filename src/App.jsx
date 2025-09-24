import React from 'react'
import Nav from './components/nav/Nav'
import Dash from './pages/dashboard/Dash'
import Login from './pages/login/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dash />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App