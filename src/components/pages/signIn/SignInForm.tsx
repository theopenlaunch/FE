import React, { useState } from 'react';
import { FormContainer } from './SignInForm.Styled';  // Make sure this import points to your actual styled component file
import { SignIn } from '../../../utils/authService'; // Adjust the path as needed to point to your actual authService file

const SignInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const userData = await SignIn(username, password);
    if (userData) {
      // setUser(userData);
      console.log('Sign in successful', userData);
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </FormContainer>
  );
};

export default SignInForm;
