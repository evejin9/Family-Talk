import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  logInData: {
    id: '',
    password: ''
  },
  logInUserInfo: {},
}

const logInSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    pushLogIn: (state, {payload: { logInId, logInPw } }) => {
      state.logInData.id = logInId;
      state.logInData.password = logInPw;
    },
    findLoginUser: (state, {payload}) => {
      state.logInUserInfo = payload
    }
  }
})

export const { pushLogIn, findLoginUser } = logInSlice.actions;

export const LogInUser = (state) => state.login.logInUserInfo; 

export default logInSlice.reducer;