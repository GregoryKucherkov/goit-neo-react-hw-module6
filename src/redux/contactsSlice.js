import { createSlice } from "@reduxjs/toolkit";
import data from "../contacts.json";

const initialState = {
  //   items: [],
  items: data,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteCtct(state, action) {
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };
    },
  },
});

export const selectContacts = (state) => state.contacts.items;

export const { addContact, deleteCtct } = contactsSlice.actions;

export default contactsSlice.reducer;
