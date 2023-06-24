import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const initialState = {
  greetings: [],
  isLoading: false,
  errors: null,
};
const URL = 'http://127.0.0.1:3000/greetings';
export const getGreetings = createAsyncThunk('greetings/getGreetings',
  async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      return data;
    } catch (error) {
      return error.message();
    }
  });

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGreetings.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getGreetings.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        greetings: action.payload,
      }))
      .addCase(getGreetings.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }));
  },
});

export default greetingsSlice.reducer;
