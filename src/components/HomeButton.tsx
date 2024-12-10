import React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface HomeButtonProps {
  title: React.ReactNode;
  Icon: React.ElementType;
  to: string; // Path for navigation
}

const HomeButton: React.FC<HomeButtonProps> = ({ title, Icon, to }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to={to} // Use the `to` prop for routing
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 200,
        textTransform: 'none',
        borderRadius: 2,
        margin: 6,
      }}
    >
      <Icon sx={{ fontSize: 100, marginBottom: 0.5 }} />
      <Typography variant="button" align="center">
        {title}
      </Typography>
    </Button>
  );
};

export default HomeButton;