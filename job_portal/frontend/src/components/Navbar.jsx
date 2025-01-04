import React, { useState } from 'react';
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
import Container from '@mui/material/Container';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar 
          position="static" 
          sx={{ backgroundColor: '#1e3a8a', boxShadow: '0px 4px 10px rgba(0,0,0,0.3)' }}
        >
          <Toolbar>
            {/* Menu Button */}
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
            {/* Dropdown Menu */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem component={Link} to="/" onClick={handleMenuClose}>
                Home
              </MenuItem>
              <MenuItem component={Link} to="/jobs" onClick={handleMenuClose}>
                Jobs
              </MenuItem>
              <MenuItem component={Link} to="/login" onClick={handleMenuClose}>
                Login
              </MenuItem>
              <MenuItem component={Link} to="/signup" onClick={handleMenuClose}>
                Signup
              </MenuItem>
            </Menu>

            {/* Navbar Title */}
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

            {/* Main Navigation Buttons */}
            <Button
              component={Link}
              to="/"
              sx={{
                backgroundColor: '#4ade80',
                color: '#1e3a8a',
                margin: '0 8px',
                textTransform: 'none',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#34d399' },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/jobs"
              sx={{
                backgroundColor: '#4ade80',
                color: '#1e3a8a',
                margin: '0 8px',
                textTransform: 'none',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#34d399' },
              }}
            >
              Jobs
            </Button>
            <Button
              component={Link}
              to="/login"
              sx={{
                backgroundColor: '#3b82f6',
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
                backgroundColor: '#f97316',
                color: 'white',
                margin: '0 8px',
                textTransform: 'none',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#ea580c' },
              }}
            >
              Signup
            </Button>
          </Toolbar>
        </AppBar>
        <br /><br />
      </Box>
    </>
  );
};

export default Navbar;
