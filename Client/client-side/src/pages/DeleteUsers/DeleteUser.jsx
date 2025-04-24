

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './DeleteUser.css'

export default function DeleteUser() {
    const [user,setUser]=useState([])
    const [mess,setMess]=useState('')
    useEffect(()=>{
        const getUser= async()=>{
            const res= await axios.get('http://localhost:4001/users/users') 
            setUser(res.data)
          }
          getUser()
    },[])
    const handleDel= async(email)=>{
      try {
        await axios.delete(`http://localhost:4001/users/removeuser/${email}`)
        setMess("Deleted succesfully")
      
      } catch (error) {
        setMess(error.message)
      }
    }
  return (
    <div>
      <h1>Finding the User</h1>
      <div>
        <p className='mess'>{mess}</p>
      <h2>All Users</h2>
      {user.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {user.map(user => (
            <li key={user._id}>
              <strong>Name : {user.name}</strong><br />
              <strong> Email : {user.email}</strong><br />
              <strong className='role'> Role : {user.role}</strong> 
               
               <center>
               <button onClick={() => handleDel(user.email)}>
                  Delete
                </button>
               </center>
              
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  )
  
}
