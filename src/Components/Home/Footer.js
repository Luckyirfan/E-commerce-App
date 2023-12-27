// Footer.js

import React from 'react';
import { Container, Typography, Divider } from '@mui/material';

function Footer() {
  return (
    <footer>
      <Container maxWidth="md">
        <Divider />
        <Typography variant="caption" align="center">
          &copy; 2023 Digital Services
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
