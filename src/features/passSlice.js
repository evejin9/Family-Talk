import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  passList: [],
  selectedPass: {
    "id": "",
    "membershipName": "",
    "membershipContent": "",
    "price": "",
    "discountPrice": "",
  },
  myPass: {
    "id": "",
    "membershipName": "",
    "membershipContent": "",
    "price": "",
    "discountPrice": "",
    "paymentAmount": ""
  }
}

const passSlice = createSlice({
  name: 'pass',
  initialState,
  reducers: {
    getAllPassList: (state, action) => {
      state.passList = action.payload;
    },
    paymentPass: (state, action) => {
      state.selectedPass = action.payload;
    },
    passInUse: (state, action) => {
      state.myPass = action.payload;
    }

  }
});

export const { getAllPassList, paymentPass, passInUse } = passSlice.actions;

export const selectPassList = (state) => state.pass.passList;
export const selectSelectedPass = (state) => state.pass.selectedPass;
export const selectMyPass = (state) => state.pass.myPass;

export default passSlice.reducer;