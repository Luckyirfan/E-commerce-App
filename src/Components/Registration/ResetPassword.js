

import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    oldPassword: '',
    newPassword: '',
  });

  const [resetSuccess, setResetSuccess] = useState(false); // Track password reset success

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        // Password reset and update successful
        const data = await response.json();
        console.log(data.message); // Display a success message to the user
        setResetSuccess(true); // Set reset success to true
      } else if (response.status === 404) {
        // User not found
        console.error('User not found. Please check the email address.');
      } else {
        // Handle other error cases
        console.error('An error occurred while resetting the password.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '80vh' }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Reset Password
          </Typography>
        </Grid>
        {resetSuccess ? (
          // Display a success message after password reset
          <Grid item xs={12}>
            <Typography variant="body1" align="center" color="success">
              Password reset successful. You can now <Link href="/signin">log in</Link>.
            </Typography>
          </Grid>
        ) : (
          // Display the password reset form if resetSuccess is false
          <Grid item xs={12}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Old Password"
                variant="outlined"
                type="password"
                name="oldPassword"
                value={formData.oldPassword}
                onChange={(e) => setFormData({ ...formData, oldPassword: e.target.value })}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="New Password"
                variant="outlined"
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
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
                Reset Password
              </Button>
            </form>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default ResetPassword;
