import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '../utils/supabaseClient';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'super_admin' | 'admin' | 'editor';
}

interface AuthContextProps {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  getAuthHeaders: () => Record<string, string>;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Helper to map Supabase User model to App User model
  const mapSupabaseUser = (sbUser: any, session: any): User => {
    return {
      id: sbUser.id,
      name: sbUser.user_metadata?.name || sbUser.email?.split('@')[0] || 'Administrator',
      email: sbUser.email || '',
      role: sbUser.user_metadata?.role || 'admin',
    };
  };

  // Monitor Auth Changes automatically via Supabase Listener
  useEffect(() => {
    const getInitialSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;
        
        if (session && session.user) {
          setUser(mapSupabaseUser(session.user, session));
          setToken(session.access_token);
        } else {
          setUser(null);
          setToken(null);
        }
      } catch (err) {
        console.error('Failed to restore Supabase session:', err);
      } finally {
        setLoading(false);
      }
    };

    getInitialSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session && session.user) {
        setUser(mapSupabaseUser(session.user, session));
        setToken(session.access_token);
      } else {
        setUser(null);
        setToken(null);
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      });

      if (error) {
        throw new Error(error.message);
      }

      if (data && data.user) {
        setUser(mapSupabaseUser(data.user, data.session));
        setToken(data.session?.access_token || null);
        return true;
      }
      
      throw new Error('Authentication returned an empty session.');
    } catch (error: any) {
      console.error('Supabase Login Error:', error.message);
      throw error;
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (e: any) {
      console.error('Logout error:', e.message);
    } finally {
      setUser(null);
      setToken(null);
      
      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: 'Logged out successfully.', type: 'info' }
      }));
    }
  };

  const getAuthHeaders = (): Record<string, string> => {
    return token ? { 'Authorization': `Bearer ${token}` } : {};
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout, getAuthHeaders }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
