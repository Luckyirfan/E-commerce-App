

import React, { useState } from "react";
import { Button, Container, Grid, TextField, Card, CardContent, Typography, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import {  Email, Lock, PhoneAndroid, Person, CreditCard } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    mobileNumber: "",
    lastName: "",
    gender: "male", // Default value
    aadharNumber: "",
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration was successful
        console.log("Registration successful");
        setRegistrationSuccess(true); // Set registration success state
        setTimeout(() => {
          // Navigate to Sign In after a delay
          navigate("/signin");
        }, 3000); // Delay for 3 seconds
      } else {
        // Handle registration errors
        console.error("Registration failed");
        // Display an error message to the user or handle it as needed
        const errorData = await response.json();
        console.error("Error Data:", errorData);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("An error occurred:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12}>
          {registrationSuccess ? (
            <Card sx={{ backgroundColor: "green", textAlign: "center" }}>
              <CardContent>
                <Typography variant="h3" sx={{ color: "#fafafa" }}>
                  Registration Successful!
                </Typography>
                <Typography variant="h6" sx={{ color: "#fafafa" }}>
                  You can now sign in.
                </Typography>
              </CardContent>
            </Card>
          ) : (
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                name="username"
                value={formData.username}
                onChange={handleChange}
                margin="normal"
                required
                InputProps={{
                  startAdornment: <Person color="primary" />,
                }}
              />
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
                InputProps={{
                  startAdornment: <Email color="primary" />,
                }}
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
                InputProps={{
                  startAdornment: <Lock color="primary" />,
                }}
              />
              <TextField
                fullWidth
                label="Mobile Number"
                variant="outlined"
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                margin="normal"
                required
                InputProps={{
                  startAdornment: <PhoneAndroid color="primary" />,
                }}
              />
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                margin="normal"
                required
                InputProps={{
                  startAdornment: <Person color="primary" />,
                }}
              />
              <RadioGroup
                row
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
              <TextField
                fullWidth
                label="Aadhar Number"
                variant="outlined"
                type="text"
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleChange}
                margin="normal"
                required
                InputProps={{
                  startAdornment: <CreditCard color="primary" />,
                }}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                size="large"
              >
                Sign Up
              </Button>
            </form>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default SignUp;
