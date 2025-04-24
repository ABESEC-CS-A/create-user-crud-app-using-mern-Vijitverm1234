import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
        <Link className='link' to='/'>User</Link>
        <Link className='link' to='/update'>Edit</Link>
        <Link className='link' to='/create'>Create</Link>
        <Link className='link' to='/delete'>Delete</Link>
        <Link className='link' to='/find'>Find</Link>

        
        </div>
      </nav>
    </div>
  )
}

export default Navbar
