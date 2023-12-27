// AboutUs.js
import React from 'react';
import { Grid, Typography } from '@mui/material';

const About = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} md={8} lg={6}>
        <Typography variant="h4" align="center">
          About Us
        </Typography>
        <Typography variant="body1" align="center">
          Welcome to our e-commerce website! At Lucky Digital Services Store, we are dedicated to providing high-quality products and excellent customer service.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in odio sit amet urna dapibus commodo.
          Nulla nec odio eu nisi accumsan rhoncus. Donec eu erat vel sapien euismod suscipit in sit amet justo.
        </Typography>
        {/* You can add more content and details about your company here */}
      </Grid>
    </Grid>
  );
};

export default About;
