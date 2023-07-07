import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  passList: [],
  selectedPass: {
    "id": "",
    "membershipName": "",
    "membershipContent": "",
    "price": "",
    "discountPrice": ""
  }
}

const passSlice = createSlice({
  name: 'pass',
  initialState,
  reducers: {
    getAllPassList: (state, action) => {
      state.passList = action.payload;
      // console.log(action.payload);
    },
    paymentPass: (state, action) => {
      state.selectedPass = action.payload;
      // console.log(action.payload);
    }
  }
});

export const { getAllPassList, paymentPass } = passSlice.actions;

export const selectPassList = (state) => state.pass.passList;
export const selectSelectedPass = (state) => state.pass.selectedPass;

export default passSlice.reducer;