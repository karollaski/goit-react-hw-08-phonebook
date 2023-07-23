import { createSlice } from '@reduxjs/toolkit';

const editContactSlice = createSlice({
  name: 'edit',
  initialState: {
    editContact: '',
  },
  reducers: {
    editContact(state, action) {
      state.editContact = action.payload;
    },
  },
});

export const { editContact } = editContactSlice.actions;
export const editContactReducers = editContactSlice.reducer;
