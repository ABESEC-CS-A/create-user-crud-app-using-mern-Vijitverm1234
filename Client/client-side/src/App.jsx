import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import CreateUser from './pages/CreateUser/CreateUser'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpdateUser from './pages/UpdateUser/UpdateUser'
import ShowUsers from './pages/ShowUsers/ShowUsers'
import DeleteUser from './pages/DeleteUsers/DeleteUser'
import FindUser from './pages/FindUser/FindUser'
function App() {

  return (
    <>
     <Navbar></Navbar>
        <Routes>
        <Route path="/" element={<ShowUsers/>} />
        <Route path="/update" element={<UpdateUser></UpdateUser>} />
        <Route path="/create" element={<CreateUser/>} />
        <Route path="/delete" element={<DeleteUser />} />
        <Route path="/find" element={<FindUser />} />
      </Routes>
    
    </>
  )
}

export default App
