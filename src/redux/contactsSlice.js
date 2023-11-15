import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { fetchContacts } from "./operations";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'saved-contacts',
    storage,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        changeContacts(state, action) {
            state.contacts = action.payload;
        },
        addContact(state, action) {
            state.contacts.push(action.payload);
        },
        deleteContact(state, action) {
            console.log("deleteContact")
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        },
    },
    extraReducers: {
        [fetchContacts.pending](state) {
            state.isLoading = true;
        },
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contacts = action.payload;
        },
        [fetchContacts.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
export const { changeContacts, addContact, deleteContact } = contactsSlice.actions;