import React, { useState } from 'react';
import { useAuth } from '../auth/AuthProvider';
import { Button } from '@mui/material';

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        await signIn(email, password);
    } catch (err: unknown) {
        if (err instanceof Error) {
            setError(err.message); // Use the message property if it's an Error
        } else {
            setError("An unexpected error occurred."); // Handle unexpected error types
        }
    }
};

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" href="/" variant="contained">Login</Button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;