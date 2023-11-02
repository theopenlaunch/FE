
import React, { useState } from 'react';
import { FormContainer } from './SignUpForm.Styled';
import { SignUp } from '../../../utils/authService';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const userData = await SignUp(username, password, email);
    if (userData) {
     // setUser(userData);
      console.log('Sign up successful', userData);
    }
  };


  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </FormContainer>
  );
};

export default SignUpForm;
