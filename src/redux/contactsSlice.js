import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'saved-contacts',
    storage,
};

const getContacts = () => {
    const savedContacts = localStorage.getItem('saved-contacts');
    if (savedContacts !== null) {
        console.log("JSON - ", JSON.parse(savedContacts));
        return JSON.parse(savedContacts);
    } else {
        return [];
    }
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: getContacts(),
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
});

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
export const { changeContacts, addContact, deleteContact } = contactsSlice.actions;