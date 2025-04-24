import React, { useState } from 'react';
import './CreateUser.css';
import axios from 'axios';
export default function CreateUser() {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [mess, setMess] = useState('');
   const [role,setRole]=useState(''); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4001/users/', {
        name,
        password:pass ,
        email,
        role
      });
      setMess('✅ Data updated successfully!');
    } catch (error) {
      setMess('❌ ' + error.message);
    }
  };

  return (
    <div>
      <h1>Create the Users</h1>

      <form onSubmit={handleSubmit}>
        <div className="heading">Enter The Information</div>

        <div className="input-group">
          <label>Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="input-group">
          <label>Name: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="input-group">
          <label>Password: </label>
          <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Role: </label>
          <input type="text" value={role} onChange={(e) => setRole(e.target.value)} required />
        </div>
        <button type="submit">Create User</button>
      </form>

      {mess && <p className="mess">{mess}</p>}
    </div>
  );
}
