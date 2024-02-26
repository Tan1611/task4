import { createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'link',
  initialState: {
    data: []
  },
  reducers: {
    input: (state, action) => {
        state.data = [...state.data,action.payload]
    },
  },
});

const { reducer, actions } = inputSlice;
export const { input } = actions;
export default reducer;