import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import { User } from '@supabase/supabase-js';

interface AuthContextProps {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, first_name: string, last_name: string) => Promise<void>;
  signOut: () => Promise<void>;
  error?: string | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setLoading(false);
      setUser(session?.user || null);
    };

    fetchSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setAuthError(error.message);
      throw new Error(error.message);
    }
    setAuthError(null);
  };

  const signUp = async (email: string, password: string, first_name: string, last_name: string) => {
    if (password.length < 8 || !/\d/.test(password) || !/[A-Z]/.test(password)) {
      throw new Error('Password must be at least 8 characters long, contain a number, and an uppercase letter.');
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { first_name, last_name },
      },
    });

    if (error) {
      setAuthError(error.message);
      throw new Error(error.message);
    }

    setAuthError(null);
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      setAuthError(error.message);
      throw new Error(error.message);
    }
    setAuthError(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut, error: authError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};