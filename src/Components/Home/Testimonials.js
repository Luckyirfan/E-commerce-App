// Testimonials.js

import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

function Testimonials() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Client Testimonial 1</Typography>
              <Typography variant="body2">
                "Great digital services! Lorem ipsum dolor sit amet..."
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Add more testimonial cards */}
      </Grid>
    </Container>
  );
}

export default Testimonials;
