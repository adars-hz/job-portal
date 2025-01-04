import { Button, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Login = () => {
  const [accountType, setAccountType] = useState('');

  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.value);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
    }}>
      <div style={{
        padding: '40px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <TextField
          id="username-email"
          label="Email"
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#ddd' },
              '&:hover fieldset': { borderColor: '#4CAF50' },
              '&.Mui-focused fieldset': { borderColor: '#4CAF50' },
            },
          }}
          fullWidth
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#ddd' },
              '&:hover fieldset': { borderColor: '#4CAF50' },
              '&.Mui-focused fieldset': { borderColor: '#4CAF50' },
            },
          }}
          type="password"
          fullWidth
          margin="normal"
        />
        <Typography
                  variant="body1"
                  sx={{
                    marginTop: '12px',
                    marginBottom: '4px',
                    fontWeight: 'bold',
                    color: '#333',
                    fontSize: '14px',
                  }}
                >
                  Select Account Type:
                </Typography>
                <RadioGroup
                  aria-label="account-type"
                  name="account-type"
                  value={accountType}
                  onChange={handleAccountTypeChange}
                  row
                  sx={{ justifyContent: 'space-between', marginBottom: '12px' }}
                >
                  <FormControlLabel
                    value="student"
                    control={<Radio sx={{ '&.Mui-checked': { color: '#4CAF50' } }} />}
                    label="Student"
                  />
                  <FormControlLabel
                    value="recruiter"
                    control={<Radio sx={{ '&.Mui-checked': { color: '#4CAF50' } }} />}
                    label="Recruiter"
                  />
                </RadioGroup>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#4CAF50',
            '&:hover': { backgroundColor: '#45A049' },
            color: 'white',
            marginTop: '16px',
            padding: '10px 20px',
            width: '100%',
          }}
        >
          Login
        </Button>
        <Typography
          variant="body2"
          sx={{
            marginTop: '16px',
            textAlign: 'center',
            color: '#4CAF50',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
          onClick={() => window.location.href = '/signup'} 
        >
          Don't have an account? Sign Up
        </Typography>
      </div>
    </div>
  );
};

export default Login;
