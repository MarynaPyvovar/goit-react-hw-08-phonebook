import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { register, verify, login, logout, fetchCurrent } from 'API/api';

export const registerUser = createAsyncThunk(
  'user/register',
  async (data, { rejectWithValue }) => {
    try {
      const user = await register(data);
      toast.success(
        'Successfully registered! Verify your email to use the app'
      );
      return user;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      toast.error(`${error.message}, try again!`);
      return rejectWithValue(error);
    }
  }
);

export const verifyUser = createAsyncThunk(
  'user/verify',
  async (data, { rejectWithValue }) => {
    try {
      const message = await verify(data);
      toast.success('Successfully verified!');
      return message;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      toast.error(`${error.message}, try again!`);
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const user = await login(data);
      toast.success('Successfully logged in!');
      return user;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      toast.error(`${error.message}, try again!`);
      return rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await logout();
      toast.success('Successfully logged out! Waiting for you to come back!');
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      toast.error(`${error.message}, try again!`);
      return rejectWithValue(error);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'user/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const response = await fetchCurrent(auth.token);
      return response;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);
