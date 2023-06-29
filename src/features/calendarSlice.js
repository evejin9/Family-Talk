import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  calendarPlanData: [],
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addCalendarTitle: (state, {payload: { title, selectedDate, content }}) => {
      state.calendarPlanData.push({
        title: title,
        date: selectedDate,
        content: content
      });
    }
  }
});

export const {addCalendarTitle} = calendarSlice.actions;

export const selectTitle = (state) => state.calendar.calendarPlanData;

export default calendarSlice.reducer;