import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './FindUser.css'
const FindUser = () => {
    const [user,setUser]=useState([])
    const [searchData,setSearchData]=useState('')
    useEffect(()=>{
        const getUser= async()=>{
            const res= await axios.get('http://localhost:4001/users/users') 
            setUser(res.data)
          }
          getUser()
    },[])
    const filteredData=user.filter(user=>user.name.toLowerCase().includes(searchData.toLowerCase()))
  return (
    <div>
      <h1>Finding the User 🔎</h1>
      <div>
        <input type="text" placeholder='enter the name of user 🔎' className='find' value={searchData} onChange={(e)=>setSearchData(e.target.value)}/><h1 className='findhead' >

        </h1>
      <h2>All Users</h2>
      {filteredData.length === 0 ? (
  <p>No users found.</p>
) : (
  <ul>
    {filteredData.map(user => (
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
