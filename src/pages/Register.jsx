import React, { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import {Form,Input} from 'antd'
import '../Styles/register.css'

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleRegister = () => {
      // Simulate user registration (store data in local storage)
      localStorage.setItem('username', username);
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/login');
    };

  return (
    <div className="from-container">
      <Form layout="vertical" onFinish={handleRegister} className='register-from'>
      <h3 className='text-center'>Register Form</h3>
        <Form.Item label="Name" name='name'>
        <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
       </ Form.Item>
       <Form.Item label="Password" name='password'>
       <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
        </ Form.Item>
        <Link to='/Login' className='m-2'>Already user Login here</Link>
       <button className="btn btn-primary" type='submit'>
           Register
        </button> 
      </Form>
       </div>
  )
}

export default Register