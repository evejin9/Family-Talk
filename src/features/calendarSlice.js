import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid'
const initialState = {
  calendarPlanData: [],
  selectedPlan: null
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
    
  }
});

export const { addCalendarTitle, getSelectedPlan, clearSelectedPlan } = calendarSlice.actions;

export const selectTitle = (state) => state.calendar.calendarPlanData;
export const selectSelectedPlan = (state) => state.calendar.selectedPlan;



export default calendarSlice.reducer;