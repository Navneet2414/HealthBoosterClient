import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  user: null,
  token: null,
  role: null,
  isAuthenticated: false,
};

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
      
      // Store in cookies
      Cookies.set('token', token, { expires: 7 });
      Cookies.set('role', role, { expires: 7 });
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
      state.isAuthenticated = false;
      
      // Remove from cookies
      Cookies.remove('token');
      Cookies.remove('role');
    },
    initializeAuth: (state) => {
      const token = Cookies.get('token');
      const role = Cookies.get('role');
      
      if (token && role) {
        state.token = token;
        state.role = role;
        state.isAuthenticated = true;
      }
    },
  },
});

export const { setCredentials, logout, initializeAuth } = authSlice.actions;
export default authSlice.reducer;