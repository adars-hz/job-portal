import React from 'react';
import { Button, Typography } from '@mui/material';

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <Typography variant="h3" style={styles.title}>
          Welcome to Job Portal
        </Typography>
        <Typography variant="h6" style={styles.subtitle}>
          Discover your next opportunity with us
        </Typography>
        <div style={styles.buttonGroup}>
          <Button
            variant="contained"
            style={{ ...styles.button, ...styles.loginButton }}
            onClick={() => (window.location.href = '/login')}
          >
            Login
          </Button>
          <Button
            variant="contained"
            style={{ ...styles.button, ...styles.signUpButton }}
            onClick={() => (window.location.href = '/signup')}
          >
            Sign Up
          </Button>
        </div>
      </div>
      <div style={styles.slideshow}>
        <div style={{ ...styles.slide, backgroundImage: `url('https://www.webmediatricks.com/uploaded_files/product/1703848338.jpg')` }} />
        <div style={{ ...styles.slide, backgroundImage: `url('https://img.freepik.com/premium-photo/business-man-working-laptop-with-job-search-screen_218381-8578.jpg')` }} />
        <div style={{ ...styles.slide, backgroundImage: `url('https://media.licdn.com/dms/image/v2/D5612AQFZP6YBd9MnMQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1703047751593?e=2147483647&v=beta&t=p4ntS4SxrdxLkIHR-T_onE-667v47uJhZcQFfvPsEY4')` }} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
  },
  slideshow: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    animation: 'slide 15s infinite',
  },
  slide: {
    minWidth: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'opacity 1s ease-in-out',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    textAlign: 'center',
    zIndex: 2,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  subtitle: {
    marginBottom: '24px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '16px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  },
  loginButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#0056b3',
    },
  },
  signUpButton: {
    backgroundColor: '#FF9800',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#E67E00',
    },
  },
};

// Add keyframes for slideshow animation
const styleSheet = document.styleSheets[0];
const keyframes = `
  @keyframes slide {
    0%, 33% {
      transform: translateX(0%);
    }
    34%, 66% {
      transform: translateX(-100%);
    }
    67%, 100% {
      transform: translateX(-200%);
    }
  }
`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default Home;
