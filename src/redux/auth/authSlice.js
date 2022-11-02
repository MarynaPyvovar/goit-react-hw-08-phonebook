import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  registerUser,
  loginUser,
  logoutUser,
  fetchCurrentUser,
} from './authOperations';

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
      state.isLoggedIn = true;
      state.token = payload.token;
      state.error = null;
      state.user = payload.user;
      toast.success('Successfully registered!');
    },
    [registerUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
      toast.error('Something is wrong, try another password!');
    },
    [loginUser.pending](state) {
      state.isLoading = true;
    },
    [loginUser.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.token = payload.token;
      state.error = null;
      state.user = payload.user;
      toast.success('Successfully logged in!');
    },
    [loginUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
      toast.error('Something is wrong, try again!');
    },
    [logoutUser.pending](state) {
      state.isLoading = true;
    },
    [logoutUser.fulfilled](state) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state = initialState;
      toast.success('Successfully logged out! Waiting for you to come back!');
    },
    [logoutUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
      toast.error('Something is wrong, try again later!');
    },
    [fetchCurrentUser.pending](state) {
      state.isLoading = true;
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = { ...payload };
    },
    [fetchCurrentUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

// Selector
export const getAuth = state => state.auth;
