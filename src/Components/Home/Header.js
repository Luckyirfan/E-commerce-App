import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Menu,
  MenuItem,
} from "@mui/material";
import "./FlipButton.css"
import { useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert, { AlertProps } from '@mui/material/Alert';

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

function Header() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  // const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }

  //   setOpen(false);
  // };
  const handleSignUpClick = () => {
    // Navigate to the "Sign In" component when "Sign Up" button is clicked
    navigate("/home");
  };
  const handleIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography
            to="/home"
            onClick={handleSignUpClick}
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              "&:hover": {
                color: "black", // Change the text color to blue on hover
                textDecoration: "none", // Add an underline on hover
                cursor: "pointer", // Change the cursor to a pointer on hover
              },
            }}
          >
            Lucky Digital Services In India
          </Typography>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleIconClick}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* <Button
            component={Link}
            to="/"
            color="inherit"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Home
          </Button> */}
          <Button
            component={Link}
            to="/services"
            color="inherit"
            className="hover-button" 
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Services
          </Button>

          {/* <Button
          color="inherit"
           variant="outlined"
           onClick={handleClick}>
          Sign Up
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          This is Not Create!
        </Alert>
      </Snackbar>
          <Button
          color="inherit"
           variant="outlined"
           onClick={handleClick}>
          Sign In
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          This is Not Create!
        </Alert>
      </Snackbar> */}
          <Button
            component={Link}
            className="hover-button" 
            to="/about"
            color="inherit"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            About
          </Button>
          <Button
            component={Link}
            className="hover-button" 
            to="/contact"
            color="inherit"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Contact
          </Button>
          <Button
            component={Link}
            className="hover-button" 
            to="/signup"
            sx={{ display: { xs: "none", sm: "block" }, color: "#64dd17" }}
          >
            Sign Up
          </Button>
          <Button
            component={Link}
            className="hover-button" 
            to="/signin"
            color="inherit"
            sx={{ display: { xs: "none", sm: "block" }, color: "#80deea" }}
          >
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ marginLeft: "auto" }}
      >
        <MenuItem onClick={handleCloseMenu} component={Link} to="/">
          Home
        </MenuItem>
        <MenuItem onClick={handleCloseMenu} component={Link} to="/services">
          Services
        </MenuItem>
        <MenuItem onClick={handleCloseMenu} component={Link} to="/about">
          {" "}
          About
        </MenuItem>
        <MenuItem onClick={handleCloseMenu} component={Link} to="/contact">
          Contact
        </MenuItem>
        <MenuItem onClick={handleCloseMenu} component={Link} to="/signup">
          Sign Up
        </MenuItem>
        <MenuItem onClick={handleCloseMenu} component={Link} to="/signin">
          Sign In
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Header;
