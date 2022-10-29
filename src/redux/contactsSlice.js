import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './contactsOperation';
import { toast } from 'react-toastify';

const initialState = {
  items: [],
  isLoading: false,
  addingLoader: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [addContact.pending](state) {
      state.addingLoader = true;
    },
    [addContact.fulfilled](state, { payload }) {
      state.addingLoader = false;
      state.error = null;
      state.items.unshift(payload);
      toast.success('ADDED !');
    },
    [addContact.rejected](state, { payload }) {
      state.addingLoader = false;
      state.error = payload;
    },
    // [removeContact.pending](state) {
    //   state.deletingLoader = true;
    // },
    [removeContact.fulfilled](state, { payload }) {
      state.error = null;
      state.items = state.items.filter(item => item.id !== payload);
      toast.info('DELETED !');
    },
    [removeContact.rejected](state, { payload }) {
      state.error = payload;
    },
  },
});

// Selector
export const getContacts = state => state.contacts;
