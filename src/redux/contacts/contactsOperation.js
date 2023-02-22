import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  fetchContactsFromAPI,
  addContactToAPI,
  removeContactFromAPI,
} from 'API/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchContactsFromAPI();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const result = await addContactToAPI(data);
      toast.success('ADDED !');
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, { rejectWithValue }) => {
    try {
      const result = await removeContactFromAPI(id);
      toast.info('DELETED !');
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
