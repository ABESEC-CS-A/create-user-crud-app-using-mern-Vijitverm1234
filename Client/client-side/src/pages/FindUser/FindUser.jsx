import React, { useEffect, useState } from 'react'
import axios from 'axios';

const FindUser = () => {
    const [user,setUser]=useState([])
    useEffect(()=>{
        const getUser= async()=>{
            const res= await axios.get('http://localhost:4001/users/users') 
            setUser(res.data)
          }
          getUser()
    },[])
  return (
    <div>
      <h1>Finding the User</h1>
      <div>
      <h2>All Users</h2>
      {user.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {user.map(user => (
            <li key={user._id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  )
}

export default FindUser
