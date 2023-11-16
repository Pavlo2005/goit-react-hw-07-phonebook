import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65551c8163cafc694fe772b0.mockapi.io/contacts/";

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("contacts");
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContacts = createAsyncThunk("contacts/delete",
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`contacts/${id}`);
            console.log(response.data.id)
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);