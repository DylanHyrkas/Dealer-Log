import React, { useEffect, useState } from 'react';
import { supabase } from '../auth/supabaseClient';

interface UserProfile {
  name: string | null;
  avatar_url: string | null;
  email: string;
}

const AccountPage: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);

      // Use Supabase's getSession to get the current session and user
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      if (sessionError) throw sessionError;

      const user = sessionData?.session?.user;
      if (!user) throw new Error('User not logged in');

      const { data: profileData, error } = await supabase
        .from('profiles')
        .select('name, avatar_url')
        .eq('id', user.id)
        .single();

      if (error) throw error;

      setProfile({
        name: profileData.name,
        avatar_url: profileData.avatar_url,
        email: user.email || '',
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred while fetching profile.');
      }
    } finally {
      setLoading(false);
    }
  };

  const updatePassword = async () => {
    try {
      setLoading(true);

      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) throw error;

      setSuccess('Password updated successfully');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred while updating the password.');
      }
    } finally {
      setLoading(false);
    }
  };

  const uploadProfilePicture = async (file: File) => {
    try {
      setLoading(true);

      // Use Supabase's getSession to get the current session and user
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      if (sessionError) throw sessionError;

      const user = sessionData?.session?.user;
      if (!user) throw new Error('User not logged in');

      const filePath = `public/${user.id}/${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      const { data: publicUrlData } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      if (!publicUrlData) throw new Error('Failed to retrieve public URL');

      const publicUrl = publicUrlData.publicUrl;

      const { error: updateError } = await supabase
        .from('profiles')
        .update({ avatar_url: publicUrl })
        .eq('id', user.id);

      if (updateError) throw updateError;

      setSuccess('Profile picture updated successfully');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred while uploading the profile picture.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Account Information</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {profile ? (
        <div>
          <img
            src={profile.avatar_url || 'https://via.placeholder.com/150'}
            alt="Profile"
            width="150"
            height="150"
          />
          <p>Name: {profile.name || 'Not set'}</p>
          <p>Email: {profile.email}</p>
          <div>
            <h3>Change Profile Picture</h3>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  uploadProfilePicture(e.target.files[0]);
                }
              }}
            />
          </div>
          <div>
            <h3>Change Password</h3>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={updatePassword}>Update Password</button>
          </div>
        </div>
      ) : (
        <p>No profile found</p>
      )}
    </div>
  );
};

export default AccountPage;