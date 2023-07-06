import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  passList: [
    
  ]
}

const passSlice = createSlice({
  name: 'pass',
  initialState,
  reducers: {
    getAllPassList: (state, action) => {
      state.passList = action.payload;
    },
    paymentPass: (state, action) => {

    }
  }
});

export const { getAllPassList, paymentPass } = passSlice.actions;

export const selectPassList = (state) => state.pass.passList;

export default passSlice.reducer;