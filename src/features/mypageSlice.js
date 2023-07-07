import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  userEditData: null,
};

const mypageSlice = createSlice({
  name: 'mypage',
  initialState,
  reducers: {
    setUserEditData(state, action) {
      state.userEditData = action.payload;
    },
  },
});

export const { setUserEditData } = mypageSlice.actions;
export const selectUserEditData = (state) => state.mypage.userEditData;
export default mypageSlice.reducer;