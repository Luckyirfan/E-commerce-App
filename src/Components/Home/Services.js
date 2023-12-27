

import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, Typography, CardActions, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Services() {
  const navigate = useNavigate();

  const [services, setServices] = useState([]);
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  useEffect(() => {
    // Fetch services data from your Node.js backend when the component mounts
    fetch('http://localhost:5000/services') // Replace with your backend URL
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error('Error fetching services:', error));

    // Check if the user is signed in (you can implement your own logic)
    // For this example, let's assume the user is signed in.
    setIsUserSignedIn(true);
  }, []);

  const handleSignUpClick = () => {
    // Navigate to the "Sign In" component when "Sign Up" button is clicked
    navigate('/signin');
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardContent style={{ flex: 1 }}>
                <Typography variant="h6">{service.title}</Typography>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src={service.img}
                    alt={`Service ${index + 1}`}
                    style={{ maxWidth: '100%', height: 'auto', maxHeight: '100%' }}
                  />
                </div>
              </CardContent>
              <CardActions>
                {isUserSignedIn ? (
                  <Link href="/signin" underline="none">
                    Click Me...
                  </Link>
                ) : (
                  <Link
                    component="button"
                    onClick={handleSignUpClick}
                    underline="none"
                  >
                    Click me...
                  </Link>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Services;


