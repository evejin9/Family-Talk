import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid'
const initialState = {
  calendarPlanData: [],
  selectedPlan: null,
  titles: [],
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addCalendarTitle: (state, {payload: { title, selectedDate, content }}) => {
      state.calendarPlanData.push({
        id: uuidv4(),
        title: title,
        date: selectedDate,
        content: content
      });
    },
    getSelectedPlan: (state, { payload: id }) => {
      const findPlan = state.calendarPlanData.find(plan => plan.id === id);
      state.selectedPlan = findPlan;
    },
    clearSelectedPlan: (state) => {
      state.selectedPlan = null;
    },
    updateCalendarTitle: (state, { payload: { id, title, content } }) => {
      const planIndex = state.calendarPlanData.findIndex(plan => plan.id === id);
      if (planIndex !== -1) {
        state.calendarPlanData[planIndex].title = title;
        state.calendarPlanData[planIndex].content = content;
      }
    },
      deleteCalendarTitle(state, action) {
      const id = action.payload;
      state.titles = state.titles.filter(title => title.id !== id);
      state.selectedTitle = null; // 선택된 타이틀 초기화
    },
  },
    
  }
);

export const { addCalendarTitle, getSelectedPlan, clearSelectedPlan, updateCalendarTitle, deleteCalendarTitle } = calendarSlice.actions;

export const selectTitle = (state) => state.calendar.calendarPlanData;
export const selectSelectedPlan = (state) => state.calendar.selectedPlan;



export default calendarSlice.reducer;