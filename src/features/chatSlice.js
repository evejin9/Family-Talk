import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  chatList: [],
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    getChatList: (state, action) => {
      
    },
  }
});

console.log();

export const { getChatList } = chatSlice.actions;

export const chatListArray = (state) => state.chat.chatList;

export default chatSlice.reducer;