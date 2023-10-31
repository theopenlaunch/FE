export const SignIn = async (username, password) => {
    try {
      const response = await fetch('YOUR_BACKEND_URL/signin', {
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
    try {
      const response = await fetch('YOUR_BACKEND_URL/signup', {
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
  