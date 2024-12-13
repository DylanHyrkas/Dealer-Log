import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';


const InventoryManagement: React.FC = () => {


  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Inventory Management
      </Typography>
    </Box>
  );
};

export default InventoryManagement;