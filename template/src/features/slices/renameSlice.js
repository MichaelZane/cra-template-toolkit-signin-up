import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAsyncRename = createAsyncThunk('rename/fetchAsyncRename', async () => {
  const response = await fetch(`/api/rename`);
  return response.data;
});

const initialState = {
  data: {},
  loading: false,
  error: null,
  // Add your initial state here
}

const renameSlice = createSlice({
  name: 'rename',
  initialState,
  reducers: {
    // Add your reducers here
    deleteSelected: (state) => {
      // Add your code here
      state.deleteSelected = {};
    },
  },
  extraReducers: {
    [fetchAsyncRename.pending]: () => {
      // Add your code here
      state.loading = true;
    },
    [fetchAsyncRename.fulfilled]: (state, {payload}) => {
      // Add your code here
      state.loading = false;
      return { ...state, data: payload };
    },
    [fetchAsyncRename.rejected]: (state, {payload}) => {
      // Add your code here
      state.loading = false;
      return { ...state, error: payload };
    }
  }
});

export const { deleteSelected } = renameSlice.actions;
//export const getAll = (state) => state.data;
export default renameSlice.reducer;