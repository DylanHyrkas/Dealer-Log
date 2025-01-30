import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  TextField,
  Alert
} from '@mui/material';
import { DataGrid, GridColDef, GridRowModel } from '@mui/x-data-grid';
import { supabase } from '.././auth/supabaseClient'; // Adjust path to your supabase client

interface Vehicle {
  id: string;
  vehicle_number: string;
  vehicle_location: string;
}

const InventoryManagement: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [newVehicle, setNewVehicle] = useState<Omit<Vehicle, 'id'>>({
    vehicle_number: '',
    vehicle_location: ''
  });

  const columns: GridColDef[] = [
    { 
      field: 'vehicle_number', 
      headerName: 'Vehicle Number', 
      flex: 1,
      editable: true 
    },
    { 
      field: 'vehicle_location', 
      headerName: 'Vehicle/Location', 
      flex: 1,
      editable: true 
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Button 
          color="error" 
          onClick={() => handleDelete(params.row.id)}
        >
          Delete
        </Button>
      )
    }
  ];

  // Fetch vehicles from Supabase
  const fetchVehicles = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('inventory')
        .select('*');

      if (error) throw error;
      setVehicles(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch vehicles');
    } finally {
      setLoading(false);
    }
  };

  // Handle row updates
  const handleEdit = async (updatedRow: GridRowModel) => {
    try {
      const { error } = await supabase
        .from('inventory')
        .update(updatedRow)
        .eq('id', updatedRow.id);

      if (error) throw error;
      return updatedRow;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update vehicle');
      return updatedRow;
    }
  };

  // Handle delete
  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('inventory')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchVehicles();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete vehicle');
    }
  };

  // Handle add new vehicle
  const handleAddVehicle = async () => {
    try {
      const { error } = await supabase
        .from('inventory')
        .insert([newVehicle]);

      if (error) throw error;
      setOpenDialog(false);
      setNewVehicle({ vehicle_number: '', vehicle_location: '' });
      fetchVehicles();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add vehicle');
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', mt: 5, p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Vehicle Inventory
        </Typography>
        <Button 
          variant="contained" 
          onClick={() => setOpenDialog(true)}
        >
          Add Vehicle
        </Button>
      </Box>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      <Box sx={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={vehicles}
          columns={columns}
          loading={loading}
          processRowUpdate={handleEdit}
          // experimentalFeatures={{ newEditingApi: true }}
          getRowId={(row) => row.id}
        />
      </Box>

      {/* Add Vehicle Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add New Vehicle</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Vehicle Number"
            fullWidth
            value={newVehicle.vehicle_number}
            onChange={(e) => setNewVehicle({...newVehicle, vehicle_number: e.target.value})}
          />
          <TextField
            margin="dense"
            label="Vehicle/Location"
            fullWidth
            value={newVehicle.vehicle_location}
            onChange={(e) => setNewVehicle({...newVehicle, vehicle_location: e.target.value})}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleAddVehicle}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default InventoryManagement;