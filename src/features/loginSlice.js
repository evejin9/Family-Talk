import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  logInData: {
    id: '',
    password: ''
  },
  logInUserInfo: {},
  isLogin: false,
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
      state.logInUserInfo = payload;
      state.isLogin = true;
    }
  }
})

export const { pushLogIn, findLoginUser } = logInSlice.actions;

export const LogInUser = (state) => state.login.logInUserInfo; 
export const isUserLogin = (state) => state.login.isLogin; 


export default logInSlice.reducer;