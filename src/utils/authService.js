export const SignIn = async (username, password) => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000'; //  default value
  try {
      const response = await fetch(`${backendUrl}/signin`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
          const userData = await response.json();
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

export const SignUp = async (username, password, email) => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000'; // default value
  try {
      const response = await fetch(`${backendUrl}/signup`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password, email }),
      });
      if (response.ok) {
          const userData = await response.json();
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
