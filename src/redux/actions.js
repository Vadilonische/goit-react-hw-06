import { createSelector } from "@reduxjs/toolkit";

export const selectorContact = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filters.name;

const filterContacts = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const filteredContacts = createSelector(
  [selectorContact, selectNameFilter],
  (contacts, filter) => filterContacts(contacts, filter)
);
