import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContacts, addContacts } from "./operations";

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.rejected]: handleRejected,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contacts = action.payload;
        },

        [deleteContacts.pending]: handlePending,
        [deleteContacts.rejected]: handleRejected,
        [deleteContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id)
        },

        [addContacts.pending]: handlePending,
        [addContacts.rejected]: handleRejected,
        [addContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contacts.push(action.payload);
        },
    },
});

export const contactsReducer = contactsSlice.reducer;