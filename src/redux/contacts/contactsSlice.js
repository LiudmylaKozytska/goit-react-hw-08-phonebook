import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/operations';
import {
  handleFulfilledAdd,
  handleFulfilledDelete,
  handleFulfilledFetch,
  handlePending,
  handleRejected,
} from './service';

const thunksArr = [fetchContacts, addContact, deleteContact];
export const handleStatus = type => thunksArr.map(el => el[type]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledFetch)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...handleStatus('pending')), handlePending)
      .addMatcher(isAnyOf(...handleStatus('rejected')), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
