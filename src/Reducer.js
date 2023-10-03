import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'authCheck',
  initialState: {
    data: {},
  },
  reducers: {
    storeData: (state,action) => {
        state.data = (action.payload);
    }
  },
})


export const { storeData } = counterSlice.actions

export default counterSlice.reducer