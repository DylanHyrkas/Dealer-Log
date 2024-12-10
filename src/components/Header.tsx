import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

interface HeaderProps {
  links?: { label: string; path: string }[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#333' }}>
      <Toolbar>
        <Typography
          variant="h3"
          sx={{ flexGrow: 1, fontWeight: 'bold', textDecoration: 'none' }}
          component={Link}
          to="/"
          color="inherit"
        >
          Dealers Vault
        </Typography>
        <Box>
          {links?.map((link) => (
            <Button
              key={link.path}
              component={Link}
              to={link.path}
              color="inherit"
              sx={{ marginLeft: 1 }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;