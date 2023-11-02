import { useState } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);

  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000'; // default value
  
  const SignIn = async (username, password) => {
    try {
      const response = await fetch(`${backendUrl}/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        localStorage.setItem('token', userData.token);
        setUser(userData.user); 
        return userData;
      } else {
        console.error('Sign in failed');
        return null;
      }
    } catch (err) {
      console.error('Error during sign in', err);
      return null;
    }
  };

  const SignUp = async (username, password, email) => {
    try {
      const response = await fetch(`${backendUrl}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email }),
      });

      if (response.ok) {
        const userData = await response.json();
        localStorage.setItem('token', userData.token);
        setUser(userData.user);
        return userData;
      } else {
        console.error('Sign up failed');
        const errorData = await response.json();
        console.error(errorData);
        return null;
      }
    } catch (err) {
      console.error('Error during sign up', err);
      return null;
    }
  };

  const signOut = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const fetchAuthenticated = async (url, options = {}) => {
    const token = localStorage.getItem('token');
    const response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        'Authorization': `Bearer ${token}`
      },
    });

    if (response.status === 401) {
      signOut(); 
    }

    return response;
  };

  return {
    user,
    SignIn,
    SignUp,
    signOut,
    fetchAuthenticated,
  };
};
