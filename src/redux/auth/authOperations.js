import { createAsyncThunk } from '@reduxjs/toolkit';

import { register, login, logout, fetchCurrent } from 'API/api';

export const registerUser = createAsyncThunk(
  'user/register',
  async (data, { rejectWithValue }) => {
    try {
      const user = await register(data);
      return user;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const user = await login(data);
      return user;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      const result = await logout();
      return result;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (token === null) {
      return thunkAPI.rejectWithValue();
    }

    try {
      const response = await fetchCurrent(token);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.message);
    }
  }
);
