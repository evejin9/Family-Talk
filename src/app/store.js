import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "../features/mainSlice";
import chatSlice from "../features/chatSlice";
import calendarSlice from "../features/calendarSlice";
import photoSlice from "../features/photoSlice";

export const store = configureStore({
  reducer: {
    main: mainSlice,
    chat: chatSlice,
    calendar: calendarSlice,
    photo: photoSlice,
  }
});