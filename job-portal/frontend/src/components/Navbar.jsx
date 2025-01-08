import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null); // State for menu anchor
  const [user, setUser] = useState(null); // State for user data

  // Handle opening the menu
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle closing the menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Fetch user data when the component mounts
  useEffect(() => {
    const token = document.cookie.split('=')[1]; // Assuming token is stored in cookies

    if (token) {
      axios
        .get('/api/v1/user/me', { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          setUser(response.data.user); // Set user data
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: '#1e3a8a',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem component={Link} to="/" onClick={handleMenuClose}>
                Home
              </MenuItem>
              <MenuItem component={Link} to="/login" onClick={handleMenuClose}>
                LogIn
              </MenuItem>
              <MenuItem component={Link} to="/signup" onClick={handleMenuClose}>
                SignUp
              </MenuItem>
              {user && (
                <MenuItem onClick={handleMenuClose}>
                  Hello, {user.fullname} {/* Use fullname from the logged-in user */}
                </MenuItem>
              )}
            </Menu>

            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: 'none',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.5rem',
              }}
            >
              JOB-HUB
            </Typography>

            {/* Home Button with Green color */}
            <Button
              component={Link}
              to="/"
              sx={{
                backgroundColor: '#4ade80', // Green color
                color: 'white',
                margin: '0 8px',
                textTransform: 'none',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#34d399' }, // Darker green on hover
              }}
            >
              Home
            </Button>

            {!user && (
              <>
                <Button
                  component={Link}
                  to="/login"
                  sx={{
                    backgroundColor: '#3b82f6', // Blue color
                    color: 'white',
                    margin: '0 8px',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    '&:hover': { backgroundColor: '#2563eb' },
                  }}
                >
                  Login
                </Button>
                <Button
                  component={Link}
                  to="/signup"
                  sx={{
                    backgroundColor: '#fb923c', // Orange color
                    color: 'white',
                    margin: '0 8px',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    '&:hover': { backgroundColor: '#f97316' },
                  }}
                >
                  Sign Up
                </Button>
              </>
            )}

            {user && (
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  marginLeft: '16px',
                  fontWeight: 'bold',
                }}
              >
                Welcome, {user.fullname} {/* Display user's fullname */}
              </Typography>
            )}
          </Toolbar>
        </AppBar>
        <br />
        <br />
      </Box>
    </>
  );
};

export default Navbar;
