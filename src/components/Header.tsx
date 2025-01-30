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
      sx={{ backgroundColor: '#088c3a', color: '#000' }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between', // Keep title and nav buttons on ends
          alignItems: 'center',
          gap: 2,
          position: 'relative', // Add this for absolute positioning context
        }}
      >
        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            color: '#000',
            flexShrink: 0,
          }}
        >
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Dealers Vault
          </Link>
        </Typography>

        {/* Centered Search Bar */}
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            maxWidth: 400,
            display: { xs: isMobile ? 'none' : 'flex', sm: 'flex' },
            justifyContent: 'center',
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            type="search"
            sx={{
              width: '100%',
              backgroundColor: '#91d9ac',
              borderRadius: 1,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon
                    sx={{ cursor: 'pointer', color: '#213547' }}
                    onClick={handleSearchSubmit}
                  />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Navigation Links/Menu (keep existing code) */}
        <Box
          sx={{
            flexShrink: 0,
            display: { xs: 'none', sm: 'block' },
          }}
        >
          {/* Existing navigation buttons */}
        </Box>

        {/* Mobile Menu Button (keep existing code) */}
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          {/* Existing mobile menu button */}
        </Box>
      </Toolbar>

      {/* Mobile Drawer (keep existing code) */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        {/* Existing drawer content */}
      </Drawer>
    </AppBar>
  );
};

export default Header;
