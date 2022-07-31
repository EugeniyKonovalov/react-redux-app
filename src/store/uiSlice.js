import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  isEditPost: false,
  showComments: false,
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    onToggleModal: (state) => {
      state.showModal = !state.showModal;
    },
    onToggleComments: (state) => {
      state.showComments = !state.showComments;
    },
    onPostEdit: (state, action) => {
      state.isEditPost = action.payload;
    },
    showErrors: (state, action) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    closeErrors: (state) => {
      state.notification = null;
    },
  },
});
export const uiAction = uiSlice.actions;

export default uiSlice.reducer;
