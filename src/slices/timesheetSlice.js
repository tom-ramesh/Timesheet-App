import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTimeSheets: {
    222: [
      { task: "PR review", estimate: "3 Hrs" },
      { task: "API Integration", estimate: "2 Hrs" },
    ],
  },
  userTimeSheet: [],
};

const timeSheetSlice = createSlice({
  name: "timeSheet",
  initialState,
  reducers: {
    addTimeSheet(state, action) {
      const {
        payload: { id: userId, data: newTask },
      } = action;

      if (action.payload.id in state.allTimeSheets) {
        state.allTimeSheets = {
          ...state.allTimeSheets,
          [userId]: [...state.allTimeSheets[userId], newTask],
        };
      } else {
        state.allTimeSheets[userId] = [newTask];
      }
    },
    getUserTimeSheet(state, action) {
      state.userTimeSheet = state.allTimeSheets[action.payload];
    },
  },
});

export const { addTimeSheet, getUserTimeSheet } = timeSheetSlice.actions;

export default timeSheetSlice.reducer;
