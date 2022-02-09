import { configureStore } from '@reduxjs/toolkit';
import renameReducer from './slices/renameSlice';

export const store = configureStore({
  
  // Add your reducers here
  reducer: renameReducer,

});