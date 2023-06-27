import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  chatList: [],
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    getChatList: (state, { payload: chat }) => {
      state.chatList.push(...chat);
    },
    addChatList: (state, { payload: chat }) => {
      console.log(chat);
      state.chatList.push({
        id: 4,
        name: "나",
        content: chat,
        time: "21:06",
      })
    },
  }
});

console.log();

export const { getChatList, addChatList } = chatSlice.actions;

export const chatListArray = (state) => state.chat.chatList;
export const newChatItem = (state) => state.chat.newChat;

export default chatSlice.reducer;