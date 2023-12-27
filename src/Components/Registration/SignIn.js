
import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography, Link, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        // Authentication was successful
        const data = await response.json();
        // Store the token or user data if needed
        // Example: localStorage.setItem('token', data.token);

        // Redirect to the dashboard
        navigate('/dashboard');
      } else if (response.status === 404) {
        // User not found (not registered)
        setError('User not found. Please register first.');
      } else {
        // Authentication failed
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setError('An error occurred while signing in');
    }
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '70vh' }}
      >
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            Sign In
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              margin="normal"
              required
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              size="large"
            >
              Sign In
            </Button>
          </form>
          <Box mt={2}>
            <Typography variant="body2" align="center">
              <Link href="/resetpassword">Forgot Password?</Link>
            </Typography>
            <Typography variant="body2" align="center">
              Don't have an account? <Link href="/signup">Sign Up</Link>
            </Typography>
          </Box>
          {error && (
            <Typography color="error" variant="body2" align="center">
              {error}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default SignIn;
