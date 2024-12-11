import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

interface HeaderProps {
  links?: { label: string; path: string; onClick?: () => void }[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#ffffff', // Light background
        color: '#213547', // Dark text
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow
      }}
    >
      <Toolbar>
        <Typography
          variant="h3"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            color: '#213547', // Dark color for title
            textDecoration: 'none',
          }}
        >
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Dealers Vault
          </Link>
        </Typography>
        <Box>
          {links?.map((link) => (
            link.onClick ? (
              <Button
                key={link.label}
                onClick={link.onClick}
                sx={{
                  marginLeft: 1,
                  color: '#213547', // Matching dark text color
                  '&:hover': {
                    backgroundColor: '#f0f0f0', // Subtle hover effect
                  },
                }}
              >
                {link.label}
              </Button>
            ) : (
              <Button
                key={link.path}
                component={Link}
                to={link.path}
                sx={{
                  marginLeft: 1,
                  color: '#213547', // Matching dark text color
                  '&:hover': {
                    backgroundColor: '#f0f0f0', // Subtle hover effect
                  },
                }}
              >
                {link.label}
              </Button>
            )
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;