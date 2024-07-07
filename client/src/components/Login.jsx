import axios from 'axios'
import React, { useState } from 'react'
import './Login.css'; // Import your CSS file

export default function Login() {

  const [user, setUser] = useState({
    email:"",
    password:"",
  });

  const login = async () => {
    const response = await axios.post("http://localhost:8080/api/v1/login", user);
    console.log("1111", response);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  return (
    <div className="login-container"> {/* Apply a class to style the container */}
      <div className="login-box"> {/* Bordered container */}
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input 
          id="email"
          name="email" 
          type="text" 
          value={user.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input 
          id="password"
          name="password" 
          type="password" 
          value={user.password}
          onChange={handleChange}
        />
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}
