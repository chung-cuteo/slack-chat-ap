import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/appSlice';
import modalReducer from '../features/modalSlice';


export const store = configureStore({
  reducer: {
    app: appReducer,
    modal: modalReducer
  },
});
