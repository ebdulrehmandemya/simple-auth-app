'use client';

import { useState, useEffect } from 'react';
import { User } from "@/types";
import { getUserFromStorage, removeUserFromStorage, isAuthenticated } from "@/lib/utils";

interface UseAuthReturn {
  user: User | null;
  loading: boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

/**
 * Custom hook for managing authentication state
 */
export const useAuth = (): UseAuthReturn => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check authentication on component mount
    const storedUser = getUserFromStorage();
    setUser(storedUser);
    setLoading(false);
  }, []);

  const logout = () => {
    removeUserFromStorage();
    setUser(null);
  };

  return {
    user,
    loading,
    logout,
    isAuthenticated: user !== null
  };
};
