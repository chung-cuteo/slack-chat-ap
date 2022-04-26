import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channel: {
    name: '',
    desc: ''
  },
  openModal: false
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    addChannel: (state, action)=>{
      state.channel.name = action.payload.channel.name
      state.channel.desc = action.payload.channel.desc
    },
    openModal: (state, action )=>{
      state.openModal = action.payload
    }
  },
})

export const { addChannel, openModal } = modalSlice.actions;

export const modalState = state => state.modal

export default modalSlice.reducer;
