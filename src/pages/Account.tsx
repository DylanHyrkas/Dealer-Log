import React, { useEffect, useState } from 'react';
import { useAuth } from '../auth/AuthProvider';
import { supabase } from '../auth/supabaseClient';
import {
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
  Alert,
  Avatar,
} from '@mui/material';

const Account: React.FC = () => {
  const { user } = useAuth(); // Get the current user from AuthProvider
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false); // Toggle for edit mode
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profile, setProfile] = useState('');
  const [role, setRole] = useState('');
  const [profilePicture, setProfilePicture] = useState<string | null>(null); // Profile picture URL
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .single();

      if (error) {
        setError('Failed to fetch profile.');
      } else if (data) {
        setFirstName(data.first_name);
        setLastName(data.last_name);
        setProfile(data.profile || '');
        setRole(data.role || 'user');
        setProfilePicture(data.profile_picture || null); // Check if there's a profile picture
      }
      setLoading(false);
    };

    fetchProfile();
  }, [user]);

  const handleUpdateProfile = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    const { error } = await supabase
      .from('profiles')
      .update({
        first_name: firstName,
        last_name: lastName,
        profile,
      })
      .eq('id', user?.id);

    if (error) {
      setError('Failed to update profile.');
    } else {
      setSuccess('Profile updated successfully.');
      setEditMode(false); // Exit edit mode after saving
    }
    setLoading(false);
  };

  const handleUpdatePassword = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    const { error } = await supabase.auth.updateUser({ password: newPassword });

    if (error) {
      setError('Failed to update password.');
    } else {
      setSuccess('Password updated successfully.');
      setNewPassword('');
    }
    setLoading(false);
  };

  const getInitials = (firstName: string, lastName: string) => {
    const firstInitial = firstName.charAt(0).toUpperCase();
    const lastInitial = lastName.charAt(0).toUpperCase();
    return `${firstInitial}${lastInitial}`;
  };

  const generateRandomColor = () => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FFC300', '#FF33A1'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Account Settings
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

      {/** Profile Picture Section **/}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Avatar
          src={profilePicture || undefined} // Show profile picture if available
          alt={`${firstName} ${lastName}`}
          sx={{
            width: 100,
            height: 100,
            bgcolor: profilePicture ? 'transparent' : generateRandomColor(), // Use random color if no picture
            fontSize: 32,
          }}
        >
          {!profilePicture && getInitials(firstName, lastName)} {/* Show initials if no picture */}
        </Avatar>
      </Box>

      {/** View Mode **/}
      {!editMode && (
        <>
          <Typography variant="body1" sx={{ mt: 2 }}>
            <strong>First Name:</strong> {firstName}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            <strong>Last Name:</strong> {lastName}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            <strong>Profile:</strong> {profile || 'No profile provided.'}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            <strong>Role:</strong> {role}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            onClick={() => setEditMode(true)} // Enter edit mode
          >
            Edit Profile
          </Button>
        </>
      )}

      {/** Edit Mode **/}
      {editMode && (
        <>
          <TextField
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Profile"
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
            fullWidth
            margin="normal"
            multiline
            rows={3}
          />
          <TextField
            label="Role"
            value={role}
            disabled
            fullWidth
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpdateProfile} // Save changes
              disabled={loading}
            >
              Save Changes
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setEditMode(false)} // Cancel editing
            >
              Cancel
            </Button>
          </Box>
        </>
      )}

      <Typography variant="h6" sx={{ mt: 5 }}>
        Change Password
      </Typography>
      <TextField
        label="New Password"
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={handleUpdatePassword}
        disabled={loading || !newPassword}
        sx={{ mt: 3 }}
      >
        Update Password
      </Button>
    </Box>
  );
};

export default Account;