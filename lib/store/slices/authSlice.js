import { createSlice } from '@reduxjs/toolkit';

// Get initial state from sessionStorage (persists on refresh, clears on browser close)
const getInitialState = () => {
  if (typeof window !== 'undefined') {
    const token = sessionStorage.getItem('token');
    const role = sessionStorage.getItem('role');
    const user = localStorage.getItem('user');
    
    if (token && role) {
      return {
        user: user ? JSON.parse(user) : null,
        token,
        role,
        isAuthenticated: true,
      };
    }
  }
  
  return {
    user: null,
    token: null,
    role: null,
    isAuthenticated: false,
  };
};

const initialState = getInitialState();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token, role } = action.payload;
      state.user = user;
      state.token = token;
      state.role = role;
      state.isAuthenticated = true;
      
      // Store in sessionStorage (clears on browser close)
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('role', role);
        localStorage.setItem('user', JSON.stringify(user));
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
      state.isAuthenticated = false;
      
      // Remove from storage
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('role');
        localStorage.removeItem('user');
      }
    },
    initializeAuth: (state) => {
      if (typeof window !== 'undefined') {
        const token = sessionStorage.getItem('token');
        const role = sessionStorage.getItem('role');
        const user = localStorage.getItem('user');
        
        if (token && role) {
          state.token = token;
          state.role = role;
          state.user = user ? JSON.parse(user) : null;
          state.isAuthenticated = true;
        }
      }
    },
  },
});

export const { setCredentials, logout, initializeAuth } = authSlice.actions;
export default authSlice.reducer;