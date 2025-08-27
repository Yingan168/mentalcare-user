import React, { createContext, useState, useContext, useEffect } from 'react';
import { postJSON, getJSON, setAuthToken } from '../service/apiClient'; // Assuming you have setAuthToken in your client

// 1. Create the context
const AuthContext = createContext(null);

// 2. Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // To check for logged-in status on initial load

  useEffect(() => {
    // Check for an existing token in localStorage when the app loads
    const initializeAuth = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        setAuthToken(token); // Set token for all future API requests
        try {
          // Verify the token by fetching the user profile
          const userData = await getJSON('/api/users/me'); 
          setUser(userData);
        } catch (error) {
          // Token is invalid or expired, so log the user out
          console.error("Session expired, please log in again.", error);
          localStorage.removeItem('authToken');
          setAuthToken(null);
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  // Login function
  const login = async (email, password) => {
    const response = await postJSON('/api/auth/login', { email, password });
    localStorage.setItem('authToken', response.token);
    setAuthToken(response.token); // Set token for API client
    setUser(response.user); // Set user state
    return response.user;
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('authToken');
    setAuthToken(null); // Clear token from API client
    setUser(null); // Clear user state
    // Optionally navigate to home page or login page
  };

  // The value provided to the context consumers
  const value = {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    logout,
  };

  // Don't render children until the initial loading check is complete
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// 3. Create the useAuth custom hook for easy consumption
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};