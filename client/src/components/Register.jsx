import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import your CSS file

export default function Register() {
  const [user, setUser] = useState({
    username:"",
    email:"",
    password:"",
    confirmpassword:"",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const navigate = useNavigate();
  
  const register = async () => {
    // Kiểm tra xem có ô input nào bị bỏ trống không
    if (Object.values(user).some(value => value === "")) {
      setErrorMessage("Vui lòng điền vào tất cả các ô input.");
      return;
    }

    // Kiểm tra xác nhận mật khẩu
    if (user.password !== user.confirmpassword) {
      setErrorMessage("Mật khẩu và mật khẩu xác nhận không khớp.");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/v1/register", user);
      setConfirmationMessage("Đăng ký thành công!");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Có thể Confirm password đã sai, hoặc Email của bạn đã được đăng kí.");
      }
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <label htmlFor="username">Username</label>
        <input 
          id="username"
          name="username"
          type="text" 
          onChange={handleChange}
          value={user.username}
        />
        <label htmlFor="email">Email</label>
        <input 
          id="email"
          name="email" 
          type="text" 
          onChange={handleChange}
          value={user.email}
        />
        <label htmlFor="password">Password</label>
        <input 
          id="password"
          name="password"
          type="password" 
          onChange={handleChange}
          value={user.password}
        />
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input 
          id="confirmpassword"
          name="confirmpassword"
          type="password" 
          onChange={handleChange}
          value={user.confirmpassword}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {confirmationMessage ? (
          <>
            <p className="confirmation-message">{confirmationMessage}</p>
            <button onClick={handleLoginClick}>to Login</button>
          </>
        ) : (
          <button onClick={register}>Register</button>
        )}
      </div>
    </div>
  );
}
