import { createSlice } from "@reduxjs/toolkit"
import { format }from "date-fns";

const initialState = {
  chatList: [],
}


const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    getChatList: (state, { payload: chat }) => {
      state.chatList = chat;
    },
    addChatList: (state, { payload: { newChat, nextId, logInUser } }) => {
      const now = new Date();
      const time = format(now, `HH:mm`);

      state.chatList.push({
        id: `${nextId.current += 1}`,
        memberId: logInUser.id,
        content: newChat,
        time: time,
      });
    },
    addMapInfo: (state, { payload: { location, nextId, logInUser } }) => {
      const now = new Date();
      const time = format(now, `HH:mm`);
      
      state.chatList.push({
        id: `${nextId.current += 1}`,
        memberId: logInUser.id,
        content: location,
        time: time,
      });
    }
  }
});

console.log();

export const { getChatList, addChatList, addMapInfo } = chatSlice.actions;

export const chatListArray = (state) => state.chat.chatList;
export const newChatItem = (state) => state.chat.newChat;

export default chatSlice.reducer;