import React, { useState } from 'react';
import { Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    try {
      // Simulate user login (check data in local storage)
      const storedUsername = localStorage.getItem('username');
      if (username === storedUsername) {
        localStorage.setItem('isLoggedIn', 'true');
        
        navigate('/');
      } else {
        
        throw new Error('Login failed');
      }
    } catch (error) {
     
      console.error('Login error:');
      message.error('somthing went wrong')
    }
  };
  

  return (
    <div>
      <div className="from-container">
        <Form layout="vertical" onFinish={handleLogin} className="register-from">
          <h3 className="text-center">Login Form</h3>
          <Form.Item label="Email" name="email">
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Link to="/Register" className="m-2">
            If You are not Register
          </Link>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
