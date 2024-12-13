import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface HeaderProps {
  links?: { label: string; path: string; onClick?: () => void }[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    console.log('Search Query:', searchQuery);
    // Add search logic or route navigation here.
  };

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#088c3a',
        color: '#000',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            color: '#000',
            textDecoration: 'none',
          }}
        >
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Dealers Vault
          </Link>
        </Typography>

        {/* Search Bar */}
        {!isMobile && (
          <Box
            sx={{
              flexGrow: 1,
              mx: 3,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              sx={{
                width: '100%',
                maxWidth: 400,
                backgroundColor: '#ffffff',
                borderRadius: 1,
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon
                      sx={{ cursor: 'pointer', color: '#213547' }}
                      onClick={handleSearchSubmit}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        )}

        {/* Navigation Links */}
        {isMobile ? (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box>
            {links?.map((link) =>
              link.onClick ? (
                <Button
                  key={link.label}
                  onClick={link.onClick}
                  sx={{
                    marginLeft: 1,
                    color: '#213547',
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
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
                    color: '#213547',
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
                    },
                  }}
                >
                  {link.label}
                </Button>
              )
            )}
          </Box>
        )}
      </Toolbar>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {links?.map((link) =>
              link.onClick ? (
                <ListItemButton key={link.label} onClick={link.onClick}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              ) : (
                <ListItemButton
                  key={link.path}
                  component={Link}
                  to={link.path}
                  onClick={() => toggleDrawer(false)} // Close the drawer on navigation
                >
                  <ListItemText primary={link.label} />
                </ListItemButton>
              )
            )}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;