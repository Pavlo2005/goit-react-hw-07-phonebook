import { createSelector } from "@reduxjs/toolkit";

export const valueContacts = state => state.contacts.contacts;

export const valueFilter = state => state.filter.filter;

export const valueCurentContacts = createSelector(
    [valueContacts, valueFilter],
    (contacts, filter) => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    }
);