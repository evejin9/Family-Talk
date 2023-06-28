import { createSlice } from "@reduxjs/toolkit"
import dayjs from "dayjs";

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
    addChatList: (state, { payload: { newChat, nextId } }) => {
      const now = dayjs();
      const time = now.format(`hh:mm`);

      state.chatList.push({
        id: `${nextId.current += 1}`,
        name: "나",
        content: newChat,
        time: time,
      });


    },
  }
});

console.log();

export const { getChatList, addChatList } = chatSlice.actions;

export const chatListArray = (state) => state.chat.chatList;
export const newChatItem = (state) => state.chat.newChat;

export default chatSlice.reducer;