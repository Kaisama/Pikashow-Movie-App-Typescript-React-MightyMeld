import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Error: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#10141f',
        color: '#fff',
        textAlign: 'center',
        padding: 3,
      }}
    >
      <Typography variant="h2" gutterBottom>
        404
      </Typography>
      <Typography variant="h6" gutterBottom>
        Oops! The page you are looking for doesn't exist.
      </Typography>
      <Typography variant="body1" mb={4}>
        It seems you may have taken a wrong turn.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoHome}>
        Go to Home
      </Button>
    </Box>
  );
};

export default Error;
