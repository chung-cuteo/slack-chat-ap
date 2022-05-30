import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channel: {
    name: '',
    desc: ''
  },
  isShowChannelModal: false,
  isShowMemberModal: false
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    addChannel: (state, action)=>{
      state.channel.name = action.payload.channel.name
      state.channel.desc = action.payload.channel.desc
    },
    openChannelModal: (state, action )=>{
      state.isShowChannelModal = action.payload
    },
    openMemberModal: (state, action )=>{
      state.isShowMemberModal = action.payload
    }
  },
})

export const { addChannel, openChannelModal, openMemberModal } = modalSlice.actions;

export const modalState = state => state.modal

export default modalSlice.reducer;
