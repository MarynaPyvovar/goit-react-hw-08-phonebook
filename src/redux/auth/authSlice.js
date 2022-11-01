import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending](state) {
      state.isLoading = true;
    },
    [registerUser.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.token = payload.token;
      state.error = null;
      state.user = payload.user;
    },
    [registerUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [loginUser.pending](state) {
      state.isLoading = true;
    },
    [loginUser.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.token = payload.token;
      state.error = null;
      state.user = payload.user;
    },
    [loginUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [logoutUser.pending](state) {
      state.isLoading = true;
    },
    [logoutUser.fulfilled](state) {
      state = initialState;
    },
    [logoutUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

// Selector
export const getAuth = state => state.auth;
