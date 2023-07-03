import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logInData: []
}

const logInSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    pushLogIn: (state, {payload: { logInId, logInPw } }) => {
      state.logInData.push({
        id: logInId,
        password: logInPw
      })
    }
  }
})

export const { pushLogIn } = logInSlice.actions;

export const logData = (state) => state.login.logInData; 

export default logInSlice.reducer;