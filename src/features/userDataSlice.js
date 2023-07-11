import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [],
}

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    addUserData: (state, {payload: user}) => {
      state.userList = user;
    },
  }
})

export const { addUserData, } = userDataSlice.actions;

export const userDataList = state => state.userData.userList;

export default userDataSlice.reducer;