import React, { useState } from 'react';
import './UpdateUser.css';
import axios from 'axios';

export default function UpdateUser() {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [mess, setMess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4001/users/updateuser/${email}`, {
        name,
        password:pass // or "password" if backend expects that
      });
      setMess('✅ Data updated successfully!');
    } catch (error) {
      setMess('❌ ' + error.message);
    }
  };

  return (
    <div>
      <h1>Update the Users</h1>

      <form onSubmit={handleSubmit}>
        <div className="heading">Edit The Information</div>

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

        <button type="submit">Edit</button>
      </form>

      {mess && <p className="mess">{mess}</p>}
    </div>
  );
}
