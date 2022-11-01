import { createAsyncThunk } from '@reduxjs/toolkit';

import { register, login, logout } from 'API/api';

export const registerUser = createAsyncThunk(
  'user/register',
  async (data, thunkAPI) => {
    try {
      const user = await register(data);
      return user;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (data, thunkAPI) => {
    try {
      const user = await login(data);
      return user;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
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
