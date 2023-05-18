import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  (state, contacts, filter) => {
    return {
      contacts: contacts,
      filter: filter,
    };
  },
  ({ contacts, filter }) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectSortedContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    let filtered = contacts.items;
    if (filter !== '') {
      const normalizedFilter = filter.toLowerCase();
      filtered = filtered.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
    return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  }
);
