import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  verifyUser,
  loginUser,
  logoutUser,
  fetchCurrentUser,
} from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isLoadingUser: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.fulfilled](state) {
      state.isLoading = false;
    },
    [registerUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [verifyUser.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [verifyUser.fulfilled](state) {
      state.isLoading = false;
    },
    [verifyUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [loginUser.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [loginUser.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.token = payload.token;
      state.user = payload.user;
    },
    [loginUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [logoutUser.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [logoutUser.fulfilled](state) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.user = { name: null, email: null };
      state.token = null;
    },
    [logoutUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [fetchCurrentUser.pending](state) {
      state.isLoadingUser = true;
      state.error = null;
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.isLoadingUser = false;
      state.isLoggedIn = true;
      state.user = payload;
    },
    [fetchCurrentUser.rejected](state, { payload }) {
      state.isLoadingUser = false;
      state.error = payload;
    },
  },
});

// Selector
export const getAuth = state => state.auth;
